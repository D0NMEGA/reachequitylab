import { connect } from 'cloudflare:sockets';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

/* Token-to-name mapping -- each person gets a unique unguessable token */
const TOKEN_MAP = {
  'test000000': { name: 'TestUser', test: true },
  'a7f3e1b9c4d2': { name: 'Aryan' },
  'e8d2c6a1f5b3': { name: 'Anay' },
  'b4c9f7e3a6d1': { name: 'Samar' },
  'd1a5b8c2e9f4': { name: 'Arjun' },
};

const NOTIFY_RECIPIENTS = [
  'don.mega306@gmail.com',
  'r.vibhukanna@gmail.com',
  'karthik06.peravali@gmail.com',
];

/* ── GET /api/respond?token=xxx ────────────────────────── */
export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const token = url.searchParams.get('token');

  if (!token || !TOKEN_MAP[token]) {
    return new Response(JSON.stringify({ error: 'Invalid link.' }), {
      status: 404,
      headers: corsHeaders,
    });
  }

  /* Check KV for existing response */
  const existing = await context.env.OFFER_RESPONSES.get(token);
  const person = TOKEN_MAP[token];

  return new Response(JSON.stringify({
    name: person.name,
    responded: existing !== null,
    response: existing,
  }), { headers: corsHeaders });
}

/* ── POST /api/respond ─────────────────────────────────── */
export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { token, decision } = body;

    if (!token || !TOKEN_MAP[token]) {
      return new Response(JSON.stringify({ error: 'Invalid link.' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    if (decision !== 'accept' && decision !== 'decline') {
      return new Response(JSON.stringify({ error: 'Invalid decision.' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    /* One-time use check */
    const existing = await context.env.OFFER_RESPONSES.get(token);
    if (existing !== null) {
      return new Response(JSON.stringify({
        error: 'You have already responded.',
        response: existing,
      }), { status: 409, headers: corsHeaders });
    }

    /* Store response permanently */
    await context.env.OFFER_RESPONSES.put(token, decision);

    /* Send notification email */
    const person = TOKEN_MAP[token];
    const gmailUser = context.env.GMAIL_ADDRESS;
    const gmailPass = context.env.GMAIL_APP_PASSWORD.replace(/\s/g, '');

    const subject = `REACH Offer Response: ${person.name} -- ${decision.toUpperCase()}`;
    const emailBody = [
      `${person.name} has ${decision === 'accept' ? 'ACCEPTED' : 'DECLINED'} the REACH Equity Lab offer.`,
      '',
      `Name: ${person.name}`,
      `Decision: ${decision.toUpperCase()}`,
      `Timestamp: ${new Date().toISOString()}`,
    ].join('\n');

    await sendViaSMTP(gmailUser, gmailPass, NOTIFY_RECIPIENTS, {
      fromName: 'REACH Equity Lab',
      fromEmail: gmailUser,
      subject,
      body: emailBody,
    });

    return new Response(JSON.stringify({ success: true, decision }), {
      headers: corsHeaders,
    });
  } catch (err) {
    console.error('Respond error:', err);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: corsHeaders }
    );
  }
}

/* ── DELETE /api/respond?token=xxx -- reset test tokens only ── */
export async function onRequestDelete(context) {
  const url = new URL(context.request.url);
  const token = url.searchParams.get('token');

  if (!token || !TOKEN_MAP[token] || !TOKEN_MAP[token].test) {
    return new Response(JSON.stringify({ error: 'Can only reset test tokens.' }), {
      status: 403,
      headers: corsHeaders,
    });
  }

  await context.env.OFFER_RESPONSES.delete(token);
  return new Response(JSON.stringify({ success: true, message: 'Test token reset.' }), {
    headers: corsHeaders,
  });
}

/* ── CORS preflight ─────────────────────────────────────── */
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

/* ── Minimal SMTP client over TLS (Gmail port 465) ────── */
async function sendViaSMTP(user, pass, recipients, mail) {
  const socket = connect('smtp.gmail.com:465', { secureTransport: 'on' });
  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let buffer = '';

  async function readResponse() {
    while (true) {
      const { value, done } = await reader.read();
      if (done) throw new Error('SMTP connection closed unexpectedly');
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\r\n').filter(l => l.length > 0);
      if (lines.length > 0) {
        const last = lines[lines.length - 1];
        if (last.length >= 4 && last[3] === ' ') {
          const resp = buffer;
          buffer = '';
          return resp.trim();
        }
      }
    }
  }

  async function send(cmd) {
    await writer.write(encoder.encode(cmd + '\r\n'));
  }

  async function command(cmd, code) {
    await send(cmd);
    const resp = await readResponse();
    if (!resp.startsWith(code)) {
      throw new Error(`SMTP: expected ${code}, got "${resp}"`);
    }
    return resp;
  }

  try {
    await readResponse();
    await command('EHLO cloudflare-pages', '250');
    await command('AUTH LOGIN', '334');
    await command(btoa(user), '334');
    await command(btoa(pass), '235');
    await command(`MAIL FROM:<${user}>`, '250');

    for (const to of recipients) {
      await command(`RCPT TO:<${to}>`, '250');
    }

    await command('DATA', '354');

    const date = new Date().toUTCString();
    const email = [
      `From: "REACH Equity Lab" <${user}>`,
      `To: ${recipients.join(', ')}`,
      `Subject: ${mail.subject}`,
      `Date: ${date}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=utf-8`,
      '',
      mail.body,
    ].join('\r\n');

    await writer.write(encoder.encode(email + '\r\n.\r\n'));
    const sendResp = await readResponse();
    if (!sendResp.startsWith('250')) {
      throw new Error('Send failed: ' + sendResp);
    }

    await send('QUIT');
  } finally {
    try { await writer.close(); } catch {}
    try { await reader.cancel(); } catch {}
  }
}
