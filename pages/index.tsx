import Head from 'next/head';
import { useState } from "react";
import { Inter } from 'next/font/google';
import IBANInput from "@/components/iban";
import MainPage from '@/components/main';

import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  return { props: { OAuthId: process.env.OIDC_ID } }
}

export default function Index({ OAuthId }) {
  const sessionData = useSession();
  const { data: session } = sessionData;

  return (
    <>
      <Head>
        <title>Meinmalzahlung</title>
        <meta name="description" content="Hol dir dein Geld!"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {session ? <IBANInput/> : <MainPage OAuthId={OAuthId}/>}
    </>
  );
}
