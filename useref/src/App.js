//useRef를 쓰면 렌더링 필요없는건 제외시켜줌
//그래서 var는 0으로 초기화 됐는데 Ref는 값을 표시해줌.

import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const login = () => {
        alert(`welcome ${inputRef.current.value}`);
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={login}>로그인</button>
        </div>
    );
}

export default App;
