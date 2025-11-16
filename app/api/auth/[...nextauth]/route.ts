import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  // adapter: MongoDBAdapter(clientPromise), // <- REMOVE
  session: { strategy: "jwt" as const }, // This is correct for Credentials

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {}, // You can leave this empty if you use a custom login page

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials: any) {
        await connectDB();        const { email, password } = credentials;

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) {
      session.user.id = token.id;
      return session;
    },
  },  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };