import Styled from 'styled-components';
import { PostList } from './postList/PostList';
import { selectRedditPosts, getRedditPosts } from './redditPostsSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Header = Styled.h1`
    margin-left: 25px;
`;

export const RedditPosts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRedditPosts());
    }, [dispatch]);

    const posts = useSelector(selectRedditPosts);
    
    return (
        <div>
            <Header>Reddit</Header>
            { !posts ? <h2>Loading...</h2> : <PostList posts={posts}/> }
        </div>
    );
}