import { useEffect, useState } from 'react';
import Image from 'next/image';
import IBAN from 'iban';

import { IconCard, Title } from '@/components/layout';
import WhyIcon from '@/public/why.svg';

function IBANInput() {
  const [valid, setValid] = useState(false);
  const [iban, setIban] = useState('');
  const [holder, setHolder] = useState('');

  useEffect(() => {
    setValid(IBAN.isValid(iban) && holder !== '');
  }, [iban, holder]);

  const update = (evt: any) => {
    const txt = evt.target.value;
    const format = IBAN.printFormat(txt, ' ');
    evt.target.value = format;
    setIban(format);
  };

  return (
    <form action="/api/verify" method="POST">
      <div className="container">
        <Title head="Mein" body="malzahlung" />
        <IconCard
          title="Why?"
          iconSmall={
            <Image src={WhyIcon} alt="Why" height={80} />
        }
          iconLarge={
            <Image src={WhyIcon} alt="Why" height={130} />
        }
          description={(
            <>
              In order to transfer your payment to you, we need your IBAN.
              To make sure the payment gets to the right place, we need to
              know the name of the account holder.
            </>
        )}
        />
        <div className="step">
          <div className="small-input-title">IBAN</div>
          <div className="step-description">
            <span className="help">
              IBAN is a unique identifier for bank accounts that helps ensure successful transactions.
            </span>
            <input name="iban" type="text" maxLength={42} onChange={update} />
          </div>
        </div>
        <div className="step">
          <div className="small-input-title">Account holder</div>
          <div className="step-description">
            <span className="help">
              The account holder of the IBAN you entered. This is usually the same as the name on your ID card.
            </span>
            <input
              name="holder"
              type="text"
              onChange={(evt) => {
                setHolder(evt.target.value);
              }}
            />
          </div>
        </div>
        <div className="btnrow">
          <input
            type="submit"
            className="confirm-btn"
            disabled={!valid}
            value="Request payment"
          />
        </div>
      </div>
    </form>
  );
}

export default IBANInput;
