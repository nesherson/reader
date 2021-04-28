import Styled from 'styled-components';
import { PostList } from './postList/PostList';
import { selectRedditPosts, fetchRedditPosts } from './redditPostsSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Header = Styled.h1`
    margin: 0 25px 15px 25px;
    padding: 25px 0 0 0;
`;

const Loading = Styled.h2`
    font-size: 1.60rem;
    margin: 10px 0 0 25px;
`;

export const RedditPosts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRedditPosts());
    }, [dispatch]);

    const posts = useSelector(selectRedditPosts);
    
    return (
        <div>
            <Header>Reddit</Header>
            { !posts.length ? <Loading>Loading...</Loading> : <PostList posts={posts}/> }
        </div>
    );
}