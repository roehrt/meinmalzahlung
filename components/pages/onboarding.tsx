import { signIn } from "next-auth/react";
import Image from 'next/image';
import DownloadIcon from "@/public/download_app.svg";
import BankIcon from "@/public/online_banking.svg";
import SecureIcon from "@/public/secure_file.svg";
import { IconCard, Title } from "../layout";


export default function Onboarding({ OAuthId }: { OAuthId: string }) {
  return (
    <>
      <div className="container">
        <Title head="Mein" body="malzahlung"></Title>
        <div>
          <IconCard title="Step 1" iconSmall={
            <Image src={DownloadIcon} alt="Download" height={80}></Image>
          } iconLarge={
            <Image src={DownloadIcon} alt="Download" height={130}></Image>
          } description = {
            <>
              Install the{' '}
              <a href="https://www.ausweisapp.bund.de/download">AusweisApp2</a> on your smartphone or get a compatible{' '}
              <a href="https://www.ausweisapp.bund.de/usb-kartenleser">USB card reader</a> and scan the{' '}
              <a href="https://www.personalausweisportal.de/Webs/PA/EN/citizens/german-id-card/german-id-card-node.html">ID-Card</a>.
            </>
          }></IconCard>
          <IconCard title="Step 2" iconLeft={true} iconSmall={
            <Image src={SecureIcon} alt="eID-PIN" height={80}></Image>
          } iconLarge={
            <Image src={SecureIcon} alt="eID-PIN" height={130}></Image>
          } description = {
            <>
              Enter your six-digit eID-PIN on either your smartphone (AusweisApp2) 
              or your computer (card reader).{' '}
              <a href="https://www.bundesdruckerei.de/de/newsroom/pressemitteilungen/neuer-pin-fuer-den-online-ausweis">No PIN yet?</a>
            </>
          }></IconCard>
          <IconCard title="Step 3" iconSmall={
            <Image src={BankIcon} alt="Transaction" height={80}></Image>
          } iconLarge={
            <Image src={BankIcon} alt="Transaction" height={130}></Image>
          } description = {
            <>
              Enter your banking information and receive the money on your
              bank account in a couple of days.
            </>
          }></IconCard>
          <div className="btnrow">
            <button className="confirm-btn" onClick={() => signIn(OAuthId)}>Identify with eID</button>
          </div>
        </div>
      </div>
    </>
  );
}
