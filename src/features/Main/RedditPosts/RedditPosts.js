import Styled from 'styled-components';
import { PostList } from './postList/PostList';
import { selectRedditPosts, getRedditPosts, handleSelected } from './redditPostsSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Header = Styled.h1`
    margin-left: 25px;
`;

const Loading = Styled.h2`
    font-size: 1.85rem;
    margin: 10px 0 0 25px;
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
            { !posts.length ? <Loading>Loading...</Loading> : <PostList posts={posts}/> }
        </div>
    );
}