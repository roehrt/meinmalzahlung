import Image from 'next/image';
import { signOut } from 'next-auth/react';

import DanceIcon from '@/public/happy_ending.svg';

function HappyEnding() {
  return (
    <div className="container">
      <div className="success-row">
        <div className="title-row">
          <h1 className="title-light">Application</h1>
          <h1 className="title">Successful</h1>
        </div>
      </div>
      <div className="success-container">
        <div className="success-row">
          <Image src={DanceIcon} alt="Download" height={130} />
          <div className="success-text">
            You are expected to receive the money in a few days.
          </div>
        </div>
      </div>
      <div className="btnrow">
        <button className="confirm-btn" onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button>
      </div>
    </div>
  );
}

export default HappyEnding;
