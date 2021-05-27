
import React, { useState } from 'react';

export function Clicker() {

    const [firstCounter, setFirstCounter] = useState(1);
    const [secondCounter, setSecondCounter] = useState(6);
    const [thirdCounter, setThirdCounter] = useState(0);

    return (
        <div className="clicker">
            
            <h1>Lesson 1 Clicker</h1>

            <button onClick={() => setFirstCounter((prevValue) => prevValue + 1)}>change count ({firstCounter})</button>
            <button onClick={() => setSecondCounter((prevValue) => prevValue + 1)}>change count ({secondCounter})</button>
            <button onClick={() => setThirdCounter((prevValue) => prevValue + 1)}>change count ({thirdCounter})</button>
        </div>
    )
}
