// import MaskedInput from 'react-text-mask';
import Head from 'next/head';
import {useState} from "react";
import Image from 'next/image';
import DanceIcon from "@/public/happy_ending.svg";

const HappyEnding = () => (    
    <div className="success">
        <div>Perfekt!</div>
        <Image src={DanceIcon} alt="Download" height={120}></Image>
        <div>Der Prozess war erfolgreich.</div>
    </div>
);

export default HappyEnding;
