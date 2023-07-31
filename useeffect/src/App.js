import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    //렌더링 될 때마다 매번 실행
    useEffect(() => {
      console.log('카운트시에만')
    },[count]); //count 변화시에만 실행됨

    return (
        <>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
            <input type="text" value={name} onChange={handleInputChange} />
            <span>name: {name}</span>
        </>
    );
}

export default App;
