import Head from 'next/head';
import { useSession } from 'next-auth/react';

import IBANInput from '@/components/pages/iban';
import Onboarding from '@/components/pages/onboarding';
import type { OAuthProps } from '@/components/props';

export async function getStaticProps() {
  return { props: { OAuthId: process.env.OIDC_ID } };
}

export default function Index({ OAuthId }: OAuthProps) {
  const sessionData = useSession();
  const { data: session } = sessionData;

  return (
    <>
      <Head>
        <title>Meinmalzahlung</title>
        <meta name="description" content="Hol dir dein Geld!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? <IBANInput /> : <Onboarding OAuthId={OAuthId} />}
    </>
  );
}
