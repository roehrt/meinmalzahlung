
const Title = ({ head, body }: TitleProps) => {
	return (
		<div className="title-row">
			<h1 className="title-light">{head}</h1>
			<h1 className="title">{body}</h1>
		</div>
  	);
}
