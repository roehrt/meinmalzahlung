import Head from 'next/head';
import { Inter } from 'next/font/google';
import ErrorMSG from "@/components/response";
import IBANInput from "@/components/iban";
import Image from 'next/image';
import DownloadIcon from "@/public/download_app.svg";
import BankIcon from "@/public/online_banking.svg";
import SecureIcon from "@/public/secure_file.svg";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Meinmalzahlung</title>
        <meta name="description" content="Hol dir dein Geld!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  <h2 className="small-title">Schritt 1</h2>
                  <div className="small-title-icon">
                    <Image src={DownloadIcon} alt="Download" height={80}></Image>
                  </div>
                </div>
                <div className='step-description'>
                  Installiere dir die{' '}
                  <a href="https://www.ausweisapp.bund.de/download">AusweisApp2</a> auf dein Handy oder besorge dir einen kompatiblen{' '}
                  <a href="https://www.ausweisapp.bund.de/usb-kartenleser">USB-Kartenleser</a> und scanne deine{' '}
                  <a href="https://www.personalausweisportal.de/Webs/PA/EN/citizens/german-id-card/german-id-card-node.html">ID-Karte</a>.
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
                  <h2 className="small-title">Schritt 2</h2>
                  <div className="small-title-icon">
                    <Image src={SecureIcon} alt="Download" height={80}></Image>
                  </div>
                </div>
                <div className='step-description'>
                  Gib deine 6-stellige eID-PIN in ein.{' '}
                  <a href="https://www.bundesdruckerei.de/de/newsroom/pressemitteilungen/neuer-pin-fuer-den-online-ausweis">Noch keine PIN?</a>
                </div>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-row">
              <div className='step-row-text'>
                <div className="small-title-row">
                  <h2 className="small-title">Schritt 3</h2>
                  <div className="small-title-icon">
                    <Image src={BankIcon} alt="Download" height={80}></Image>
                  </div>
                </div>
                <div className='step-description'>
                  Gib deine Bankdaten an und bekomme dein Geld in wenigen Tagen überwiesen.
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
      <ErrorMSG/>
      <IBANInput/>
      </div>
    </>
  );
}
