import NextAuth from "next-auth";

import AusweisIdent from "@/lib/ausweisIdent";

export const authOptions = {
  providers: [
    AusweisIdent,
  ],
  callbacks: {
    async session({ session, token }) {
      session.jti = token.jti;
      return session
    }
  }
};

export default NextAuth(authOptions);
