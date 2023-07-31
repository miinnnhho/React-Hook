import './App.css';
import { useState } from 'react';

function App() {
    const [time, setTime] = useState(1);

    const handleClick = () => {
        let newTime;
        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    };

    return (
        <div>
            <span>now: {time}시</span>
            <button onClick={handleClick}>update</button>
        </div>
    );
}

export default App;
