import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";


// =============================
// GET SESSION (SERVER SIDE)
// =============================
export async function auth() {
  return await getServerSession(authOptions);
}


// =============================
// GET CURRENT USER OBJ
// =============================
export async function currentUser() {
  const session = await auth();
  if (!session) return null;

  await connectDB();
  const user = await User.findById(session.user.id).select("-password");
  return user;
}


// =============================
// GET CURRENT USER ID
// =============================
export async function currentUserId() {
  const session = await auth();
  return session?.user?.id || null;
}
