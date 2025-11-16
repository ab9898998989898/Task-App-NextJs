import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb"
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    const exist = await User.findOne({ email });
    if (exist) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    return NextResponse.json({ message: "User created", user });
  }
  catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
