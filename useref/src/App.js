//useRef를 쓰면 렌더링 필요없는건 제외시켜줌

import './App.css';
import React, { useState, useRef } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const increseCountState = () => {
        setCount(count + 1);
    };

    const increseCountRef = () => {
        countRef.current = countRef.current + 1;
    };
    return (
        <div>
            <p>State: {count}</p>
            <p>Ref: {countRef.current}</p>
            <button onClick={increseCountState}>State 올려</button>
            <button onClick={increseCountRef}>Ref 올려</button>
        </div>
    );
}

export default App;
