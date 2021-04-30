import Styled from 'styled-components';
import { PostList } from './postList/PostList';
import { selectHackerNewsPosts, fetchHackerNewsPosts } from './HackerNewsPostsSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { formatHackerNewsPost } from '../../../utilities/utils.js'

const Header = Styled.h1`
    margin: 0 25px 15px 25px;
    padding: 25px 0 0 0;
`;

const Loading = Styled.h2`
    font-size: 1.85rem;
    margin: 10px 0 0 25px;
`;

export const HackerNewsPosts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHackerNewsPosts());
    }, [dispatch]);
    
    const posts = useSelector(selectHackerNewsPosts).map(post => formatHackerNewsPost(post));

    return (
        <div>
            <Header>Hacker News</Header>
            { !posts.length ? <Loading>Loading...</Loading> : <PostList posts={posts}/> }
        </div>
    );
}