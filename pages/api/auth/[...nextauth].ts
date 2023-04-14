import NextAuth from "next-auth";

import AusweisIdent from "@/lib/ausweisIdent";

export const authOptions = {
  providers: [
    AusweisIdent,
  ]
};

export default NextAuth(authOptions);
