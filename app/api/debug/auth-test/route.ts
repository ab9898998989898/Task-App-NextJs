import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { email, password } = body || {};
    if (!email || !password) {
      return NextResponse.json({ ok: false, error: 'email and password required' }, { status: 400 });
    }

    await connectDB();
    const user = await User.findOne({ email }).lean();
    if (!user) return NextResponse.json({ ok: false, error: 'user not found' }, { status: 404 });

    const match = await bcrypt.compare(password, (user as any).password);
    if (!match) return NextResponse.json({ ok: false, error: 'invalid credentials' }, { status: 401 });

    // Do not return password hash
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _p, ...safe } = user as any;
    return NextResponse.json({ ok: true, user: safe });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Debug auth-test error:', err);
    return NextResponse.json({ ok: false, error: 'server error' }, { status: 500 });
  }
}
