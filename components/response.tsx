import Image from 'next/image';
import DanceIcon from "@/public/happy_ending.svg";

const HappyEnding = () => (    
    <div className="success">
        <Image src={DanceIcon} alt="Download" height={80}></Image>
        <div>Alles läuft, gönn dir Porsche Cayman S!</div>
    </div>
);

export default HappyEnding;
