// import MaskedInput from 'react-text-mask';
import Head from 'next/head';
import {useState} from "react";
import Image from 'next/image';
import DanceIcon from "@/public/happy_ending.svg";

const HappyEnding = () => (
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
                    <h1 className="title">Successful</h1>
                </div>
            </div>
            <div className="success-container">
                <div className="success-row">
                    <Image src={DanceIcon} alt="Download" height={130}></Image>
                    <div className="success-text">
                        You are expected to receive the money in a few days.
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default HappyEnding;
