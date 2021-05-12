import Styled from 'styled-components';
import { PostList } from './postList/PostList';
import {
  fetchHackerNewsPosts,
  selectHackerNewsPosts,
} from '../HackerNewsPosts/hackerNewsPostsSlice.js';
import {
  fetchRedditPosts,
  selectRedditPosts,
} from '../RedditPosts/redditPostsSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  formatRedditPost,
  formatHackerNewsPost,
  shuffle,
} from '../../../utilities/utils.js';

const Header = Styled.h1`
    margin: 0 25px 15px 25px;
    padding: 25px 0 0 0;
    font-size: 1.8rem;
    color: ${(props) => props.theme.primary};
`;

const Loading = Styled.h2`
    font-size: 1.60rem;
    margin: 10px 0 0 25px;
    color: ${(props) => props.theme.primary};
`;

const List = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 0 15px;
`;

const ListItem = Styled.li`
    padding: 10px;
    margin: 0 0 7px 0;
    &:hover {
        background-color: ${(props) => props.theme.hover};
    } 
`;
export const AllInOne = () => {
  const dispatch = useDispatch();

  let redditPosts = useSelector(selectRedditPosts);
  let hackerNewsPosts = useSelector(selectHackerNewsPosts);

  if (!redditPosts.length) {
    dispatch(fetchRedditPosts());
  }
  if (!hackerNewsPosts.length) {
    dispatch(fetchHackerNewsPosts());
  }

  let allPosts = [];
  if (redditPosts.length && hackerNewsPosts.length) {
    const tempRedditPosts = redditPosts.map((post) => {
      return formatRedditPost(post);
    });
    const tempHackerNewsPosts = hackerNewsPosts.map((post) => {
      return formatHackerNewsPost(post);
    });
    allPosts = shuffle([...tempRedditPosts, ...tempHackerNewsPosts]);
  }

  return (
    <div>
      <Header>All In One</Header>
      {!allPosts.length ? (
        <Loading>Loading...</Loading>
      ) : (
        <PostList posts={allPosts} />
      )}
    </div>
  );
};
