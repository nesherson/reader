import Styled from 'styled-components';
import { PostList } from './postList/PostList';
import { selectRedditPosts, getRedditPosts } from './mainSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const MainPage = Styled.main`
    background-color: #f4f4f4;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    flex: 3;
`;

const Header = Styled.h1`
    margin-left: 25px;
`;

export const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRedditPosts());
    }, [dispatch]);

    const posts = useSelector(selectRedditPosts);
    return (
        <MainPage>
            <Header>Reddit</Header>
            { !posts ? <h2>Loading...</h2> : <PostList posts={posts}/> }
        </MainPage>
    );
}