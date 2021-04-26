import Styled from 'styled-components';
import { PostList } from './postList/PostList';
import { selectHackerNewsPosts, fetchHackerNewsPosts } from './HackerNewsPostsSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Header = Styled.h1`
    margin-left: 25px;
`;

export const HackerNewsPosts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHackerNewsPosts());
    }, [dispatch]);
    
    const posts = useSelector(selectHackerNewsPosts);

    return (
        <div>
            <Header>Hacker News</Header>
            { !posts ? <h2>Loading...</h2> : <PostList posts={posts}/> }
        </div>
    );
}