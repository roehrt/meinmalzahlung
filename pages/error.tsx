// import MaskedInput from 'react-text-mask';
import Head from 'next/head';
import {useState} from "react";
import Image from 'next/image';
import AccessDenied from "@/public/access_denied.svg";

const SadEnding = () => (
    <>
        <Head>
        <title>Meinmalzahlung</title>
        <meta name="description" content="Hol dir dein Geld!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
            <div className="success-row">
                <div className="title-row">
                    <h1 className="title-light">Application</h1>
                    <h1 className="title">Something went wrong.</h1>
                </div>
            </div>
            <div className="success-container">
                <div className="success-row">
                    <Image src={AccessDenied} alt="Download" height={130}></Image>
                    <div className="success-text">
                        Please try again.
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default SadEnding;
