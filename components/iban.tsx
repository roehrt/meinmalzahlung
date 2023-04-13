import MaskedInput from 'react-text-mask';
import {useState} from "react";

const IBANInput = () => {
    const [valid, setValid] = useState(false);
    return(
    <div>
        <MaskedInput onChange={(evt) => {setValid(!evt.target.value.includes("_"))}} placeholder='IBAN eingeben' style={{fontSize:"20px", width:"100%"}} className='iban'
            mask={[/[A-Z]/, /[A-Z]/, /[1-9]/,/[1-9]/, " ", /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, " ", /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, " ", /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, " ", /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, " ", /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/ ]}
        />
        <button disabled={!valid}>Submit</button>
    </div>);
}

export default IBANInput;
