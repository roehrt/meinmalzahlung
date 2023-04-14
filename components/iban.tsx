// import MaskedInput from 'react-text-mask'

import { useEffect, useState } from "react";
import IBAN from "iban";
import Image from 'next/image';
import WhyIcon from "@/public/why.svg";

const IBANInput = () => {
  const [valid, setValid] = useState(false);
  const [iban, setIban] = useState("");
  const [holder, setHolder] = useState("");

  useEffect(() => {
    setValid(IBAN.isValid(iban) && holder != "");
  }, [iban, holder])

  const update = (evt: any) => {
    let txt = evt.target.value;
    let format = IBAN.printFormat(txt, " ");
    evt.target.value = format;
    setIban(format);
  }

  return (
    <>
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
            <input maxLength={42} onChange={update}/>
          </div>
        </div>
        <div className="step">
          <div className="small-input-title">Account holder</div>
          <div className="step-description">
            <input onChange={(evt) => {
              setHolder(evt.target.value)
            }}/>
          </div>
        </div>
        <div className="btnrow">
          <button
            className="btn"
            disabled={!valid}
            onClick={() => {
              console.log("IBAN: " + iban);
            }}
          >Get your monkey!</button>
        </div>
      </div>
    </>
  );
}

export default IBANInput;
