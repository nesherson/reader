import Styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { RedditPosts } from './RedditPosts/RedditPosts';
import { HackerNewsPosts } from './HackerNewsPosts/HackerNewsPosts';

const MainPage = Styled.main`
    background-color: #f4f4f4;
    color: #333;
    flex: 3;
`;

export const Main = () => {
    return (
        <Switch>
        <MainPage>
            <Route exact path='/reddit' component={RedditPosts}/>
            <Route exact path='/hacker-news' component={HackerNewsPosts}/>
        </MainPage>
        </Switch>
    );
}