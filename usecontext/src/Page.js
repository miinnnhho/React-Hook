import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

const Page = () => {
    return <div>하이</div>;
};

export default Page;

// 여기선 필요 없어서 안 받아옴. 하위 컴포넌트가 있고, 거기서 필요하다면 거기서
// const { isDark } = useContext(ThemeContext); 로 받아옴. Props 안 쓰고. 
