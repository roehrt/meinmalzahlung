export interface IconProps {
  src: string,
  alt: string,
}

export interface OAuthProps {
  OAuthId: string,
}

export interface TitleProps {
  head: string,
  body: string,
}

export interface IconCardProps {
  title: string,
  iconSmall: JSX.Element,
  iconLarge: JSX.Element,
  description: JSX.Element,
  iconLeft?: boolean,
}
