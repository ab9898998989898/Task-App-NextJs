import { NextResponse } from "next/server";

export async function GET() {
  try {
    const present = {
      NODE_ENV: process.env.NODE_ENV || null,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL ? true : false,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? true : false,
      MONGODB_URI: process.env.MONGODB_URI ? true : false,
      SMTP_HOST: process.env.SMTP_HOST ? true : false,
      SMTP_PORT: process.env.SMTP_PORT ? true : false,
      SMTP_USER: process.env.SMTP_USER ? true : false,
      SMTP_PASS: process.env.SMTP_PASS ? true : false,
      NEXTAUTH_DEBUG: process.env.NEXTAUTH_DEBUG === 'true',
    };

    return NextResponse.json({ ok: true, present });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Env debug error:', err);
    return NextResponse.json({ ok: false, error: 'server error' }, { status: 500 });
  }
}
