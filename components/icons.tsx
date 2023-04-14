import Image from "next/image";

const IconSmall = (props: IconProps) => <Image src={props.src} alt={props.alt} height={80} ></Image>
const IconLarge = (props: IconProps) => <Image src={props.src} alt={props.alt} height={130} ></Image>

export { IconSmall, IconLarge };
