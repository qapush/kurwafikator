import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './result.css';

export default function Result(props){

    const { content } = props;

    let [isCopied, toggleCopied] = useState(false);

    const onCopy = () => {
        
        const copiedStatus = true;
        toggleCopied(copiedStatus);

    }

    return(
        <>
            <div className="result">
                <p>
                    { content } 
                </p>
            </div>
           <CopyToClipboard 
                text={ content }
                onCopy={ () => onCopy() } 
                >
                
                <button>
                    Kopiuj
                </button>

           </CopyToClipboard>

           { isCopied  === true ? <p className="message">Skopiowano</p> : null } 

        </>
    )
}

