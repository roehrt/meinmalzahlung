import NextAuth from "next-auth";

import AusweisIdent from "@/lib/ausweisIdent";

export default NextAuth({
  providers: [
    AusweisIdent,
  ],
});
