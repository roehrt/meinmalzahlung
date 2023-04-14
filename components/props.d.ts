
interface IconProps {
	src: string,
	alt: string,
}

interface OAuthProps {
	OAuthId: string,
}

interface TitleProps {
	head: string,
	body: string,
}

interface IconCardProps {
	title: string,
	iconSmall: JSX.Element,
	iconLarge: JSX.Element,
	description: JSX.Element,
	iconLeft?: boolean,
}

