import Styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
 
const List = Styled.ul`
    list-style: none;
    padding: 0;
    marginL 0;
    display: flex;  
    flex-direction: column;
`;

const ListItem = Styled(NavLink)` 
    color: #666;
    margin: 6px 0;
    &.active {
    font-weight: bold;
  }
`;

const Header = Styled.h2`
    margin: 30px 0;
`;

const Divider = Styled.li`
    background: linear-gradient(to right, #dcdcdc, rgba(206, 41, 41, 0));
    height: 1px;
    margin: 20px 0;
    list-style: none;
`;

const style = {
    textDecoration: 'none',
}

export const Navigation = () => {
    return (
        <div>
            <Header>Reddit</Header>
            <Divider/>
            <List>
                <ListItem style={style} to='/reddit'>Reddit</ListItem>
                <ListItem style={style} to='/hacker-news'>Hacker News</ListItem>
            </List>
            <Divider/>
        </div>
    );
}