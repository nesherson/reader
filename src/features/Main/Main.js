import Styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { RedditPosts } from './RedditPosts/RedditPosts';
import { HackerNewsPosts } from './HackerNewsPosts/HackerNewsPosts';
import { AllInOne } from './AllInOne/AllInOne';

const MainPage = Styled.main`
    background-color: #f4f4f4;
    color: #333;
    margin-left: 25%;
    width: 75%;
    height: 100%;
    position: relative;
    z-index: 999;
    @media (max-width: 768px) {
        margin-left: 20px;
    }
`;

export const Main = () => {
    return (
        <Switch>
        <MainPage>
            <Route exact path='/all-in-one' component={AllInOne}/>
            <Route exact path='/reddit' component={RedditPosts}/>
            <Route exact path='/hacker-news' component={HackerNewsPosts}/>
        </MainPage>
        </Switch>
    );
}