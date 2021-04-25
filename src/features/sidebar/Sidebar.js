import Styled from 'styled-components';
import { WebsiteList } from './WebsiteList/WebsiteList'
import { Logo } from './Logo/Logo';

const Aside = Styled.aside`
    flex: 1;
    min-width: 220px;
    background-color: #eee;
    padding: 35px 10px 20px 50px;
`;


export const Sidebar = () => {
    return (
        <Aside>
            <Logo width={48} height='auto'/>
            <WebsiteList/>
        </Aside>
    );
}