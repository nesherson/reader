import Styled from 'styled-components';
import { Navigation } from './Navigation/Navigation'
import { Logo } from './Logo/Logo';

const Aside = Styled.aside`
    flex: 1;
    min-width: 220px;
    background-color: #eee;
    padding: 35px 10px 20px 50px;
`;

// <Logo width={48} height='auto'/>
export const Sidebar = () => {
    return (
        <Aside>
            
            <Navigation/>
        </Aside>
    );
}