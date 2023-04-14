import Image from 'next/image';
import AccessDenied from "@/public/access_denied.svg";
import Link from 'next/link';

const SadEnding = () => (
  <>
    <div className="container">
      <div className="success-row">
        <div className="title-row">
          <h1 className="title-light">Application</h1>
          <h1 className="title">Something went wrong</h1>
        </div>
      </div>
      <div className="success-container">
        <div className="success-row">
          <Image src={AccessDenied} alt="Error" height={130}></Image>
          <div className="success-text">
            There was an error during the authentication process.
          </div>
		  <Link href={"/"}>Try again</Link>
        </div>
      </div>
    </div>
  </>
);

export default SadEnding;
