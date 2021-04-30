import Styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Post } from './post/Post';
import { selectHackerNewsPosts, fetchHackerNewsPosts, selectLoading } from './HackerNewsPostsSlice.js';
import { formatHackerNewsPost } from '../../../utilities/utils.js'

const Header = Styled.h1`
    margin: 0 25px 15px 25px;
    padding: 25px 0 0 0;
    font-size: 1.8rem;
`;

const Loading = Styled.h2`
    font-size: 1.60rem;
    margin: 10px 0 0 25px;
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
        background-color: #EEE;
    } 
`;

export const HackerNewsPosts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHackerNewsPosts());
    }, [dispatch]);
    
    const posts = useSelector(selectHackerNewsPosts).map(post => formatHackerNewsPost(post));
    const isLoading = useSelector(selectLoading);

    return (
        <div>
            <div>
            <Header>Hacker News</Header>
            { isLoading ? <Loading>Loading...</Loading> : null }
            { !isLoading && posts ? (
                <List>
                    {posts.map(post => {
                        return (
                            <ListItem key={post.id}>
                                <Post post={post}/>
                            </ListItem>
                        );
                    })}
                </List>
            ) : null }
        </div>
        </div>
    );
}