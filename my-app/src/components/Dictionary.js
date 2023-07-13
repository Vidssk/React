import { useState, useEffect } from "react";

export default function Dictionary() {
    const [word, setWord] = useState('');
    // Limit what state useEffect cares about ---> dependency array
    // useEffect(()=>{console.log('state Updated ', word);})
    useEffect(()=>{console.log('state Updated ', word);})

    return (
        <>
            <input type="text" onChange={ (e) => {
                setWord(e.target.value);
            }
            }/>
            <h1>Let's get the definition for {word}</h1>
        </>
    )
}