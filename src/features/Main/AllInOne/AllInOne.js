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
         dispatch(fetchRedditPosts());
     }
    if (!hackerNewsPosts.length) {
        dispatch(fetchHackerNewsPosts());
    };

    //  console.log('reddit --> ', redditPosts);
    //  console.log('hacker --> ', hackerNewsPosts);

    // const allPosts = !redditPosts.length && !hackerNewsPosts.length ? [] : [...redditPosts, ...hackerNewsPosts];
    // console.log(allPosts);'

     let allPosts = [];
     if (redditPosts.length && hackerNewsPosts.length) {
        const tempRedditPosts = redditPosts.map(post => {
            return {
                id: post.data.id,
                type: 'Reddit',
                author: post.data.author,
                title: post.data.title,
                link: post.data.url,
                score: post.data.ups,
                comment_num: post.data.num_comments
            } 
        });
        const tempHackerNewsPosts = hackerNewsPosts.map(post => {
            return {
                id: post.id,
                type: 'Hacker News',
                author: post.by,
                score: post.score,
                link: post.url,
                title: post.title,
                comment_num: post.descendants,
            }
        });
        allPosts = [...tempRedditPosts, ...tempHackerNewsPosts];
     }
     // console.log(allPosts);

    return (
        <div>
        <Header>All In One</Header>
        { !allPosts.length ? <Loading>Loading...</Loading> : <PostList posts={allPosts}/> }
    </div>
    );
}
/*
 <div>
            <Header>All In One</Header>
            { !posts.length ? <Loading>Loading...</Loading> : <PostList posts={posts}/> }
        </div>

*/