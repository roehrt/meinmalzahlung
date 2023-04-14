import AccessDenied from "@/public/access_denied.svg";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconLarge } from '@/components/icons';

const errMessages: Record<string, string> = {
	"id": "Something went wrong during the authentication of your eID.",
	"uni": "Something has gone wrong verifying that you are currently a student.",
};

const defaultErrMessage = "Something went wrong unexpectedly.";
const getErrMessage = (t: string) => errMessages[t] || defaultErrMessage;

const Error = () => {
	const errtype = useRouter().query["t"]?.toString() || "";
	return (
		<div className="container">
			<div className="success-row">
				<div className="title-row">
					<h1 className="error-light">Error</h1>
					<h1 className="error">Occured</h1>
				</div>
			</div>
			<div className="success-container">
				<div className="success-row">
					<IconLarge src={AccessDenied} alt='Error'/>
					<div className="success-text">
						{getErrMessage(errtype)}
					</div>
					<Link style={{fontSize:"20px"}} href={"/"}>Try again</Link>
				</div>
			</div>
		</div>
	);
}

export default Error;
