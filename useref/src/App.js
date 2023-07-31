//useRef를 쓰면 렌더링 필요없는건 제외시켜줌
//그래서 var는 0으로 초기화 됐는데 Ref는 값을 표시해줌.

import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>올려</button>
        </div>
    );
}

export default App;
