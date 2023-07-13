import { useState, useEffect } from "react";

export default function Dictionary() {
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    // Limit what state useEffect cares about ---> dependency array
    // useEffect(()=>{console.log('state Updated ', word);})

    
    //no dependency array ---> update for any sate change
    // useEffect(()=>{console.log('state Updated ', word + ' ' + word2);})
    
    //empty dependency array ---> execute once 
    // if you want to do something at initial page load (fetch data to put in web page)
    // useEffect(()=>{console.log('state Updated ', word + ' ' + word2);},[]);
    
    // passing in data ---> only execute when those state variables are changed
    // useEffect(()=>{console.log('state Updated ', word + ' ' + word2);},[word]);
    useEffect(()=>{console.log('state Updated ', word);},[word]);
    useEffect(()=>{console.log('state Updated ', word2);},[word2]);
    
    return (
        <>
            <input type="text" onChange={ (e) => {
                setWord(e.target.value);
            }
            }/>
            <h1>Let's get the definition for {word}</h1>
            <input type="text" onChange={ (e) => {
                setWord2(e.target.value);
            }
            }/>
            <h2>Let's get the definition for {word2}</h2>
        </>
    )
}