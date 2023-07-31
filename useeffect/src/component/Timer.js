import React, { useEffect } from 'react';

const Timer = (props) => {
    useEffect(() => {
        const Timer = setInterval(() => {
            console.log('타이머 도는중');
        }, 1000);

        return () => {
            clearInterval(Timer);
        };
    }, []);
    return (
        <div>
            <span>타이머 시작함.콘솔 보셈</span>
        </div>
    );
};

export default Timer;
