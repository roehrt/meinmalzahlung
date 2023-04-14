// import MaskedInput from 'react-text-mask';
import Head from 'next/head';
import {useState} from "react";
import IBAN from "iban";
import Image from 'next/image';
import WhyIcon from "@/public/why.svg";

const IBANInput = () => {
    const [valid, setValid] = useState(false);
    const update = (evt:any) => {
        let txt = evt.target.value;
        let format = IBAN.printFormat(txt, " ");
        evt.target.value = format;
        setValid(IBAN.isValid(format));
    }

    return(
        <>
            <Head>
            <title>Meinmalzahlung</title>
            <meta name="description" content="Hol dir dein Geld!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div className="title-row">
                    <h1 className="title-light">Your</h1>
                    <h1 className="title">BankAccount</h1>
                </div>
                <div className="step">
                    <div className="step-row">
                        <div className='step-row-text'>
                            <div className="small-title-row">
                                <div className="small-title">Why?</div>
                                <div className="small-title-icon">
                                    <Image src={WhyIcon} alt="Download" height={80}></Image>
                                </div>
                            </div>
                            <div className="step-description">
                            In order to transfer your payment to you, we need your IBAN.
                            To make sure the payment gets to the right place, we need to
                            know the name of the account holder.
                            </div>
                        </div>
                        <div className="big-title-icon">
                            <Image src={WhyIcon} alt="Download" height={130}></Image>
                        </div>
                    </div>
                </div>
                <div className="step">
                    <div className="small-input-title">IBAN</div>
                    <div className="step-description">
                        <input className="account-owner" maxLength={42} onChange={update} placeholder='Enter IBAN' style={{fontSize:"20px", width:"100%"}}/>
                    </div>
                </div>                    
                <div className="step">
                    <div className="small-input-title">Account holder</div>
                    <div className="step-description">
                        <input className="account-owner" placeholder='Enter Name'/>
                    </div>
                </div>
                <button className="btn" disabled={!valid}>Get your monkey!</button>
            </div>
        </>
    );
}

export default IBANInput;
