import Image from 'next/image';
import type { IconProps } from '@/components/props';

function IconSmall({ alt, src }: IconProps) {
  return <Image src={src} alt={alt} height={80} />;
}
function IconLarge({ alt, src }: IconProps) {
  return <Image src={src} alt={alt} height={130} />;
}

export { IconSmall, IconLarge };
