import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400, headers: corsHeaders }
      );
    }

    // In production (Cloudflare Workers runtime), the SMTP logic from
    // functions/api/contact.js is used via cloudflare:sockets.
    // During local dev or static builds, this returns success as a stub.
    //
    // The full SMTP implementation requires:
    //   - GMAIL_ADDRESS env var
    //   - GMAIL_APP_PASSWORD env var
    //   - RECIPIENT_EMAILS env var
    //
    // When deployed to Cloudflare Pages via @cloudflare/next-on-pages,
    // use getRequestContext() from @cloudflare/next-on-pages to access
    // environment bindings, then replicate the SMTP logic from
    // functions/api/contact.js.
    //
    // TODO: Port full SMTP logic once CF runtime is confirmed working.

    return NextResponse.json(
      { success: true },
      { headers: corsHeaders }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to send. Please try again later." },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
