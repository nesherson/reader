import Styled from 'styled-components';
import { Post } from './post/Post';

const List = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 0 15px;
    `;

export const PostList = ({posts}) => {
    return <List>
        {posts.map(post => {
            return <Post key={post.id} post={post}/>;
})}
    </List>;
}