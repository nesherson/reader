import Styled from 'styled-components';
import { PostList } from './postList/PostList';
import { selectHackerNewsPosts, fetchHackerNewsPosts, selectHackerPosts } from '../HackerNewsPosts/HackerNewsPostsSlice.js';
import { selectRedditPosts, fetchRedditPosts, selectPosts } from '../RedditPosts/redditPostsSlice.js';
import { useSelector, useDispatch } from 'react-redux';


const Header = Styled.h1`
    margin-left: 25px;
`;

const Loading = Styled.h2`
    font-size: 1.85rem;
    margin: 10px 0 0 25px;
`;

export const AllInOne = () => {

    const dispatch = useDispatch();

    let redditPosts = useSelector(selectPosts);
    let hackerNewsPosts = useSelector(selectHackerPosts);

     if (!redditPosts.length) {
         dispatch(fetchRedditPosts);
     }
    if (!hackerNewsPosts.length) {
        dispatch(fetchHackerNewsPosts());
    };

    // useEffect(() => {
    //     const redditPosts = useSelector(selectRedditPosts);
    //     if (!redditPosts.length) {
    //         dispatch(fetchRedditPosts);
    //     }
    //     const hackerNewsPosts = useSelector(selectHackerNewsPosts);
    //     if (!hackerNewsPosts.length) {
    //         dispatch(fetchHackerNewsPosts);
    //     }
    // }, [dispatch]);

    console.log('reddit --> ', redditPosts);
    console.log('hacker --> ', hackerNewsPosts);


    return (
       null
    );
}
/*
 <div>
            <Header>All In One</Header>
            { !posts.length ? <Loading>Loading...</Loading> : <PostList posts={posts}/> }
        </div>

*/