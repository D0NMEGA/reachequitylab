import { connect } from 'cloudflare:sockets';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

/* ── POST /api/contact ──────────────────────────────────── */
export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const gmailUser = context.env.GMAIL_ADDRESS;
    const gmailPass = context.env.GMAIL_APP_PASSWORD.replace(/\s/g, '');
    const recipients = context.env.RECIPIENT_EMAILS.split(',').map(e => e.trim());

    await sendViaSMTP(gmailUser, gmailPass, recipients, {
      fromName: name,
      fromEmail: email,
      subject,
      body: message,
    });

    return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to send. Please try again later.' }),
      { status: 500, headers: corsHeaders }
    );
  }
}

/* ── CORS preflight ─────────────────────────────────────── */
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
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
    await readResponse();                       // 220 greeting
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
      `From: "${mail.fromName}" <${user}>`,
      `Reply-To: ${mail.fromEmail}`,
      `To: ${recipients.join(', ')}`,
      `Subject: ${mail.subject}`,
      `Date: ${date}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=utf-8`,
      '',
      `Name: ${mail.fromName}`,
      `Email: ${mail.fromEmail}`,
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
