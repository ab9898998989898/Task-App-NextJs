// ... (imports at the top)
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Task from "@/models/Task";
import { getServerSession } from "next-auth"; // <-- 1. Import
import { authOptions } from "../auth/[...nextauth]/route"; // <-- 2. Import
import mongoose from "mongoose";

export async function GET(){
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user || !(session.user as { id: string }).id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        
        const userId = (session.user as { id: string }).id;
        const tasks = await Task.find({ userId: new mongoose.Types.ObjectId(userId) });
        return NextResponse.json(tasks);
    } catch (error) {
        console.error('Get tasks error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

// VVV REPLACE YOUR POST FUNCTION WITH THIS VVV
export async function POST(req: Request) {
  try {
    // 3. Get the user's session
    const session = await getServerSession(authOptions);

    // 4. Check if user is logged in
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();

    if (!body || !body.title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    // 5. Create the task AND ADD THE userId as ObjectId
    const userId = (session.user as { id: string }).id;
    const NewTask = await Task.create({
      title: body.title,
      description: body.description ?? '',
      userId: new mongoose.Types.ObjectId(userId) // <-- Store as ObjectId
    });

    return NextResponse.json(NewTask, { status: 201 });
  } catch (error) {
    console.error('Create task error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}