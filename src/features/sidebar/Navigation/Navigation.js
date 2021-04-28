import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';
 
const List = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 30px 15px 0 0;
    display: flex;  
    flex-direction: column;
`;

const ListItem = Styled(NavLink)` 
    color: #666;
    margin: 6px 0;
    text-decoration: none;
    &.active {
    font-weight: bold;
  }
`;

const Divider = Styled.li`
    background: linear-gradient(to right, #dcdcdc, rgba(206, 41, 41, 0));
    height: 1px;
    margin: 20px 0;
    list-style: none;
`;

export const Navigation = () => {
    return (
        <div>
            <List>
            <ListItem to='/all-in-one'>All In One</ListItem>
            <Divider/>
                <ListItem to='/reddit'>Reddit</ListItem>
                <ListItem to='/hacker-news'>Hacker News</ListItem>
            </List>
            <Divider/>
        </div>
    );
}