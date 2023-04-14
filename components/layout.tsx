import Image from "next/image";
import { IconLarge, IconSmall } from "./icons";

const Title = (props: TitleProps) => {
	return (
		<div className="title-row">
			<h1 className="title-light">{props.head}</h1>
			<h1 className="title">{props.body}</h1>
		</div>
	);
}

const IconCard = (props: IconCardProps) => {

	const largeIcon = <div className="big-title-icon">{props.iconLarge}</div>;
	const noIcon = <></>;

	const iconLeft = props.iconLeft ? largeIcon : noIcon;
	const iconRight = props.iconLeft ? noIcon : largeIcon;

	return (
		<div className="step">
			<div className="step-row">
				{iconLeft}
				<div className="step-row-text">
					<div className="small-title-row">
						<div className="small-title">{props.title}</div>
						<div className="small-title-icon">
							{props.iconSmall}
						</div>
					</div>
					{props.description}
				</div>
				{iconRight}
			</div>
		</div>
	);
}

export { Title, IconCard };
