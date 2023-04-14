import type { TitleProps, IconCardProps } from './props';

function Title({ head, body }: TitleProps) {
  return (
    <div className="title-row">
      <h1 className="title-light">{head}</h1>
      <h1 className="title">{body}</h1>
    </div>
  );
}

function IconCard(props: IconCardProps) {
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
