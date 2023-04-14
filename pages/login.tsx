import { useSession, signIn, signOut } from "next-auth/react";
import { prisma } from "@/lib/database";

export async function getServerSideProps() {
  return { props: { OAuthId: process.env.OIDC_ID } }
}

export default function Component({ OAuthId }) {
  const sessionData = useSession();
  const { data: session }  = sessionData;
  if (session) {
    return (
      <>
        Signed in <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn(OAuthId)}>Sign in</button>
    </>
  )
}
