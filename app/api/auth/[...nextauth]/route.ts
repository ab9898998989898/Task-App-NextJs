import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoDBAdapter } from "@auth/mongodb-adapter"; // <- REMOVE
// import clientPromise from "@/lib/mongodb"; // <- REMOVE

import connectDB from "@/lib/mongodb"
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  // adapter: MongoDBAdapter(clientPromise), // <- REMOVE
  session: { strategy: "jwt" }, // This is correct for Credentials

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {}, // You can leave this empty if you use a custom login page

      async authorize(credentials) {
        await connectDB();

        const { email, password } = credentials;

        // Find user in DB
        const user = await User.findOne({ email });
        if (!user) return null;

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return null;

        // This return is perfect
        return { id: user._id.toString(), email: user.email, name: user.name };
      },
    }),
  ],

  // This callback block is perfect
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };