import './App.css';
import React, { useState, useReducer } from 'react';

const ACTION_TYPES = {
    deposit: 'deposit',
    withdraw: 'withdraw',
};
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.deposit:
            return state + action.payload;
        case ACTION_TYPES.withdraw:
            return state - action.payload;
        default:
            return state;
    }
};

function App() {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0); //돈 초기값
    return (
        <div className="App">
            <h2>은행임</h2>
            <p>잔고: {money}원</p>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step="1000" />
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPES.deposit, payload: number });
                }}
            >
                예금
            </button>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPES.withdraw, payload: number });
                }}
            >
                출금
            </button>
        </div>
    );
}

export default App;

// 철수가 은행으로부터 "만원 출금해주소" 요청하는게 Dispatch이고, "만원 출금해주소" 내용이 Action, 은행이 Reducer
// dispatchEvent(Action) 디스페치에 액션을 담아서 Reducer에 전달하면 Reducer(State, Action) 을 통해 State를 Action으로 업데이트 해줌
