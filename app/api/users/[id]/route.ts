import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


// GET USER BY ID
// ===============
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    await connectDB();

    const { id } = await params;
    const user = await User.findById(id).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


// =====================
// UPDATE USER BY ID
// =====================
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    await connectDB();

    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Only allow the same user OR admin (if you later add roles)
    if (session.user.id !== id) {
      return NextResponse.json(
        { error: "Permission denied" },
        { status: 403 }
      );
    }

    const body = await req.json();

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


// ======================
// DELETE USER BY ID
// ======================
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    await connectDB();

    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Only allow user to delete himself  
    if (session.user.id !== id) {
      return NextResponse.json(
        { error: "Permission denied" },
        { status: 403 }
      );
    }

    await User.findByIdAndDelete(id);

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
