import NextAuth from "next-auth";

import AusweisIdent from "@/lib/ausweisIdent";

export default NextAuth({
  providers: [
    AusweisIdent,
  ],
  callbacks: {
    async signIn(g) {
      console.log(g)
      // g.profile.hash
      return true;
    },
  }
});
