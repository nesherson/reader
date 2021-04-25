import Styled from 'styled-components';

const List = Styled.ul`
    list-style: none;
    margin: 35px 0 0 0;
    padding: 0;
`;

const ListItem = Styled.li` 
    color: #666;
    margin: 12px 0;
`;

const Header = Styled.h2`
    margin: 45px 0;
`;

const Line = Styled.hr`
    border-top: 1px solid #666;
    border-bottom: none;
`;

const websites = ['Reddit', 'Hacker News'];

export const WebsiteList = (props) => {

    return (
        <div>
            <Header>Reddit</Header>
            <Line/>
            <List>
            { websites.map(item => {
                return <ListItem>{item}</ListItem>
            })}
        </List>
        </div>
    );
}