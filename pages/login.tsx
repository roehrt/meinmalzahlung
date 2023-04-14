import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
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
      <button onClick={() => signIn('oidc-ausweis-ident')}>Sign in</button>
    </>
  )
}
