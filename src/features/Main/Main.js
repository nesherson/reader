import Styled from 'styled-components';
import { RedditPosts } from './RedditPosts/RedditPosts';
import { HackerNewsPosts } from './HackerNewsPosts/HackerNewsPosts';

const MainPage = Styled.main`
    background-color: #f4f4f4;
    color: #333;
    flex: 3;
`;

export const Main = () => {
    return (
        <MainPage>
            <HackerNewsPosts />         
        </MainPage>
    );
}