import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const blub = useSession();
  const { data: session }  = blub;
  if (session) {
    return (
      <>
        Signed in as {JSON.stringify(blub)} <br />
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
