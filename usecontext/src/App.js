import './App.css';
import React, { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Page from './Page';
import { UserContext } from './context/UserContext';
function App() {
    const [isDark, setIsDark] = useState(false);
    return (
        <div>
            <UserContext.Provider value={'사용자'}>
                <ThemeContext.Provider value={{ isDark, setIsDark }}>
                    {/* App에 Context를 불러와서 필요한 사람들 모집 !*/}
                    <Page />
                </ThemeContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default App;
