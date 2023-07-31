//useRef를 쓰면 렌더링 필요없는건 제외시켜줌
//그래서 var는 0으로 초기화 됐는데 Ref는 값을 표시해줌.

import './App.css';
import React, { useState, useRef } from 'react';

function App() {
    const [renderer, setRenderer] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const doRendering = () => {
        setRenderer(renderer + 1);
    };

    const increseRef = () => {
        countRef.current = countRef.current + 1;
    };

    const increseVar = () => {
        countVar = countVar + 1;
    };

    return (
        <div>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={doRendering}>렌더링</button>
            <button onClick={increseRef}>Ref 올려</button>
            <button onClick={increseVar}>Var 올려</button>
        </div>
    );
}

export default App;
