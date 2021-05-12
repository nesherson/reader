import Styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  selectRedditPosts,
  fetchRedditPosts,
  selectLoading,
} from './redditPostsSlice.js';
import { formatRedditPost } from '../../../utilities/utils.js';
import { Post } from './post/Post';

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

export const RedditPosts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRedditPosts());
  }, [dispatch]);

  const posts = useSelector(selectRedditPosts).map((post) =>
    formatRedditPost(post)
  );
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      <Header>Reddit</Header>
      {isLoading ? <Loading>Loading...</Loading> : null}
      {!isLoading && posts ? (
        <List>
          {posts.map((post) => {
            return (
              <ListItem key={post.id}>
                <Post post={post} />
              </ListItem>
            );
          })}
        </List>
      ) : null}
    </div>
  );
};
