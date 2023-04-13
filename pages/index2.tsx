import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { BsPersonVcard } from "react-icons/bs"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // #FFD600 color theme
  return (
    <>
      <Head>
        <title>Meinmalzahlung</title>
        <meta name="description" content="Hol dir dein Geld!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="title-row">
        <div className="title">Einmalzahlung</div>
        <div className="title colfg">201</div>
      </div>
      <div>
        <div className="step">
          <div className="small-title-row">
            <div className="small-title">Schritt 1</div>
            {//<BsPersonVcard size={20} color='#e7c100' className='small-title-icon'></BsPersonVcard>
            }
          </div>
          <div>
            Installiere dir die <a href="https://www.ausweisapp.bund.de/download">AusweisApp2</a> auf dein Handy oder besorge dir einen kompatiblen <a href="https://www.ausweisapp.bund.de/usb-kartenleser">USB-Kartenleser</a> und scanne deine <a href="https://www.personalausweisportal.de/Webs/PA/EN/citizens/german-id-card/german-id-card-node.html">ID-Karte</a>.
          </div>
          </div>
        <div className="step">
          <div className="small-title">Schritt 2</div>
          Gib deine 6-stellige eID-PIN in ein. <a href="https://www.bundesdruckerei.de/de/newsroom/pressemitteilungen/neuer-pin-fuer-den-online-ausweis">Noch keine PIN?</a>
        </div>
        <div className="step">
          <div className="small-title">Schritt 3</div>
          Gib deine Bankdaten an und bekomme dein Geld in wenigen Tagen überwiesen.
        </div>
        <button className='btn'>Hol dir jetzt dein Gelb</button>
      </div>
    </>
  );
}
