import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb"
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    // Parse and validate request body
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error('Signup error: Invalid JSON in request body', parseError);
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { name, email, password } = body;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json({ 
        error: "Name, email, and password are required" 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        error: "Invalid email format" 
      }, { status: 400 });
    }

    // Validate password length
    if (password.length < 8) {
      return NextResponse.json({ 
        error: "Password must be at least 8 characters long" 
      }, { status: 400 });
    }

    // Connect to database
    await connectDB();

    // Normalize email to lowercase for consistency
    const normalizedEmail = email.trim().toLowerCase();

    // Check if user already exists
    const exist = await User.findOne({ email: normalizedEmail });
    if (exist) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password and create user
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashed,
    });

    // Don't send password hash in response
    const { password: _, ...userWithoutPassword } = user.toObject();

    return NextResponse.json({ 
      message: "User created successfully", 
      user: userWithoutPassword 
    }, { status: 201 });
  }
  catch (error: any) {
    console.error('Signup error:', error);
    
    // Handle specific Mongoose errors
    if (error.name === 'ValidationError') {
      return NextResponse.json({ 
        error: "Validation error: " + Object.values(error.errors).map((e: any) => e.message).join(', ')
      }, { status: 400 });
    }

    if (error.code === 11000) {
      return NextResponse.json({ 
        error: "User with this email already exists" 
      }, { status: 400 });
    }

    // Generic server error
    return NextResponse.json({ 
      error: "Server error. Please try again later." 
    }, { status: 500 });
  }
}
