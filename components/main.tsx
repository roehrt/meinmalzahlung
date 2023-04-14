import Image from 'next/image';
import DownloadIcon from "@/public/download_app.svg";
import BankIcon from "@/public/online_banking.svg";
import SecureIcon from "@/public/secure_file.svg";

export default function MainPage(){

return (
    <>
      <div className="container">
        <div className="title-row">
          <h1 className="title-light">Mein</h1>
          <h1 className="title">malzahlung</h1>
        </div>
        <div>
          <div className="step">
            <div className="step-row">
              <div className='step-row-text'>
                <div className="small-title-row">
                  <div className="small-title">Step 1</div>
                  <div className="small-title-icon">
                    <Image src={DownloadIcon} alt="Download" height={80}></Image>
                  </div>
                </div>
                <div className='step-description'>
                  Install the{' '}
                  <a href="https://www.ausweisapp.bund.de/download">AusweisApp2</a> on your smartphone or get a compatible{' '}
                  <a href="https://www.ausweisapp.bund.de/usb-kartenleser">USB-Cardreader</a> and scan the{' '}
                  <a href="https://www.personalausweisportal.de/Webs/PA/EN/citizens/german-id-card/german-id-card-node.html">ID-Card</a>.
                </div>
              </div>
              <div className="big-title-icon">
                <Image src={DownloadIcon} alt="Download" height={130}></Image>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-row">
              <div className="big-title-icon">
                <Image src={SecureIcon} alt="Download" height={130}></Image>
              </div>
              <div className='step-row-text'>
                <div className="small-title-row">
                  <div className="small-title">Step 2</div>
                  <div className="small-title-icon">
                    <Image src={SecureIcon} alt="Download" height={80}></Image>
                  </div>
                </div>
                <div className='step-description'>
                  Enter your six-digit eID-PIN on either your smartphone (AusweisApp2) or your computer (Cardreader).{' '}
                  <a href="https://www.bundesdruckerei.de/de/newsroom/pressemitteilungen/neuer-pin-fuer-den-online-ausweis">No PIN yet?</a>
                </div>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-row">
              <div className='step-row-text'>
                <div className="small-title-row">
                  <div className="small-title">Step 3</div>
                  <div className="small-title-icon">
                    <Image src={BankIcon} alt="Download" height={80}></Image>
                  </div>
                </div>
                <div className='step-description'>
                  Enter your banking information and receive the money on your bank account in a couple of days.
                </div>
              </div>
              <div className="big-title-icon">
                <Image src={BankIcon} alt="Download" height={130}></Image>
              </div>
            </div>
          </div>
          <div className="btnrow">
           <button className="btn">Hol dir jetzt dein Gelb</button>
          </div>
        </div>
        </div>
    </>
  );
}
