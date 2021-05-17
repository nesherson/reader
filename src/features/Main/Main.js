import Styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { RedditPosts } from './RedditPosts/RedditPosts';
import { HackerNewsPosts } from './HackerNewsPosts/HackerNewsPosts';
import { AllInOne } from './AllInOne/AllInOne';

const MainPage = Styled.main`
    background-color: ${(props) => props.theme.backgroundPrimary};
    margin-left: 25%;
    width: 75%;
    height: 100%;
    position: relative;
    z-index: 998;
    transition: background-color 0.2s ease;
    @media (max-width: 768px) {
        margin-left: 10px;
        margin-right: 10px;
        width: 100%;
    }
`;

export const Main = () => {
  return (
    <Switch>
      <MainPage>
        <Route exact path='/' component={AllInOne} />
        <Route exact path='/reddit' component={RedditPosts} />
        <Route exact path='/hacker-news' component={HackerNewsPosts} />
      </MainPage>
    </Switch>
  );
};
