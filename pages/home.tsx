import Head from 'next/head';
import {useState} from "react";
import { Inter } from 'next/font/google';
import HappyEnding from "@/components/success";
import IBANInput from "@/components/iban";
import MainPage from '@/components/main';

import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] });


export default function Home() {

  const blub = useSession();
  const { data: session }  = blub;

  const [page, setPage] = useState(0);

  return (
    <>
      <Head>
        <title>Meinmalzahlung</title>
        <meta name="description" content="Hol dir dein Geld!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={()=>{setPage((page+1)%3)}}></button>
      {
        page==0?<MainPage/>:
        page==1?<IBANInput/>:
        <HappyEnding/>
      }
    </>
  );
}
