import Image from "next/image";

const IconSmall = ({src, alt}: IconProps) => <Image src={src} alt={alt} height={80}></Image>
const IconLarge = ({src, alt}: IconProps) => <Image src={src} alt={alt} height={130}></Image>

export { IconSmall, IconLarge };
