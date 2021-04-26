import Styled from 'styled-components';
import { Navigation } from './Navigation/Navigation'
import { Logo } from './Logo/Logo';

const Aside = Styled.aside`
    flex: 1;
    min-width: 220px;
    background-color: #eee;
    padding: 35px 10px 20px 75px;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Sidebar = () => {
    return (
        <Aside>
        <Logo width={48} height='auto'/>
            <Navigation/>
        </Aside>
    );
}