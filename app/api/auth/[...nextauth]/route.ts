import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  session: { strategy: "jwt" as const },
  // Enable NextAuth debug logging when NEXTAUTH_DEBUG=true in env
  debug: process.env.NEXTAUTH_DEBUG === 'true',
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials: any) {
        try {
          if (!credentials) return null;
          await connectDB();
          const { email, password } = credentials;
          // Find user in DB
          const user = await User.findOne({ email });
          if (!user) return null;
          // Check password
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) return null;
          // Return minimal user object
          return { id: user._id.toString(), email: user.email, name: user.name };
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error("Authorize error (credentials):", err);
          return null;
        }
      },
    }),
  ],
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
      if (token?.id) {
        session.user = session.user || {};
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - session.user may be readonly in types; runtime assignment is intentional
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };