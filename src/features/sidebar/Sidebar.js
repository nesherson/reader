import Styled from 'styled-components';
import { Navigation } from './Navigation/Navigation'
import { Logo } from './Logo/Logo';

const Aside = Styled.aside`
    box-sizing: border-box;
    width: 25%;
    min-width: 220px;
    background-color: #eee;
    padding: 35px 15px 20px 5%;
    position: fixed;
    height: 100%;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Sidebar = () => {
    return (
        <Aside>
        <Logo width={48}/>
            <Navigation/>
        </Aside>
    );
}