import './App.css';
import React, { useState, useReducer } from 'react';
import Student from './Student';

const reducer = (state, action) => {
    switch (action.type) {
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            };
            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            };
        case 'delete-student':
            return {
                count: state.count - 1,
                students: state.students.filter((student) => student.id !== action.payload.id),
            };
        case 'mark-student':
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if (student.id === action.payload.id) {
                        return { ...student, isHere: !student.isHere };
                    }
                    return student;
                }),
            };
        default:
            return state;
    }
};

const initailState = {
    count: 0,
    students: [],
};

function App() {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initailState);
    return (
        <div className="App">
            <h1>출석부</h1>
            <p>총 학생 수 :{studentsInfo.count}</p>
            <input
                type="text"
                placeholder="이름을 입력하세요."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({ type: 'add-student', payload: { name } });
                }}
            >
                추가
            </button>
            {studentsInfo.students.map((student) => {
                return (
                    <Student
                        key={student.id}
                        name={student.name}
                        dispatch={dispatch}
                        id={student.id}
                        isHere={student.isHere}
                    />
                );
            })}
        </div>
    );
}

export default App;

// 철수가 은행으로부터 "만원 출금해주소" 요청하는게 Dispatch이고, "만원 출금해주소" 내용이 Action, 은행이 Reducer
// dispatchEvent(Action) 디스페치에 액션을 담아서 Reducer에 전달하면 Reducer(State, Action) 을 통해 State를 Action으로 업데이트 해줌
