import Image from 'next/image';
import AccessDenied from "@/public/access_denied.svg";
import Link from 'next/link';
import { useRouter } from 'next/router';

const getErrMessage = (t: string) => ({
	"id": "Something went wrong during the authentication of your eID.",
	"uni": "Something has gone wrong verifying that you are currently a student.",
}[t] || "Something went wrong unexpectedly.");

const Error = (props: any) => {

	let errtype = useRouter().query["t"]?.toString() || "";

	return (
		<>
			<div className="container">
			<div className="success-row">
				<div className="title-row">
				<h1 className="error-light">Error</h1>
				<h1 className="error">Occured</h1>
				</div>
			</div>
			<div className="success-container">
				<div className="success-row">
				<Image src={AccessDenied} alt="Error" height={130}></Image>
				<div className="success-text">
					{getErrMessage(errtype)}
				</div>
					<Link style={{fontSize:"20px"}} href={"/"}>Try again</Link>
				</div>
			</div>
			</div>
		</>
	);
}

export default Error;
