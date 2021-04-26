import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = Styled.ul`
    list-style: none;
    margin: 35px 0 0 0;
    padding: 0;
`;

const ListItem = Styled.li` 
    color: #666;
    margin: 12px 0;
    font-weight: bold;
`;

const Header = Styled.h2`
    margin: 45px 0;
`;

const Divider = Styled.li`
    background: linear-gradient(to right, #dcdcdc, rgba(206, 41, 41, 0));
    height: 1px;
    list-style: none;
`;

const style = {
    textDecoration: 'none',
}

export const Navigation = (props) => {

    return (
        <div>
            <Header>Reddit</Header>
            <Divider/>
            <List>
                <Link style={style} to='/reddit'><ListItem>Reddit</ListItem></Link>
                <Link style={style} to='/hacker-news'><ListItem>Hacker News</ListItem></Link>
        </List>
        </div>
    );
}