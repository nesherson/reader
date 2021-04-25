import Styled from 'styled-components';
import { Post } from './post/Post';

const List = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    `;

export const PostList = ({posts}) => {

    return <List>
        {posts.map(post => {
            
            return <Post {...post}/>;
})}
    </List>;
}