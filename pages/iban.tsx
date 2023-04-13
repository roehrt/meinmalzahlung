// import MaskedInput from 'react-text-mask';
import Head from 'next/head';
import {useState} from "react";

const IBANInput = () => {
    const [valid, setValid] = useState(false);
    const IBAN = require('iban');
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
                    <h1 className="title-light">Dein</h1>
                    <h1 className="title">Bankkonto</h1>
                </div>
                <div className="step">
                    <h2 className="title-small">Warum?</h2>
                    <div className="step-description">
                        Um dir deine Deinmalzahlung zu überweisen, brauchen wir deine IBAN. Damit sichergestellt werden kann,
                        dass die Zahlung auch tatsächlich dort ankommt, wo sie ankommen soll, wird der zugehörige Kontoinhaber benötigt.
                    </div>
                </div>
                <div>
                    <input maxLength={42} onChange={update} placeholder='IBAN eingeben' style={{fontSize:"20px", width:"100%"}} className='iban'/>
                    <div>
                        <input style={{fontSize:"20px", width:"100%"}} placeholder='Kontoinhaber'/>
                    </div>
                    <button className="btn" disabled={!valid}>Hold dir dein Gelb! Diesmal wirklich!</button>
                </div>
            </div>
        </>
    );
}

export default IBANInput;
