import Styled from 'styled-components';
import { PostList } from './postList/postList';

const MainPage = Styled.main`
    background-color: #f4f4f4;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    flex: 3;
`;

const Header = Styled.h1`
    margin-left: 25px;
`;

const posts = [
    {
        link: '#',
        title: 'Common interface to linux NIC',
        score: 15,
        author: 'Hacker News',
        comment_num: 300
    },
    {
        link: '#',
        title: 'What is most overrated product',
        score: 120,
        author: 'Reddit',
        comment_num: 450
    },
    {
        link: '#',
        title: 'Memegine - A search engine for memes',
        score: 99,
        author: 'Product Hunt',
        comment_num: 78
    },
    {
        link: '#',
        title: 'Twitch becoming softcore pornhub',
        score: 10000,
        author: 'josef',
        comment_num: 896
    }
    ,
    {
        link: '#',
        title: 'Refugees giving back',
        score: 670,
        author: 'eltthu',
        comment_num: 356
    }
];


export const Main = () => {
    return (
        <MainPage>
            <Header>Reddit</Header>
            <PostList posts={posts}/>
        </MainPage>
    );
}