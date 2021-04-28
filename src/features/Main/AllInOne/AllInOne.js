import Styled from 'styled-components';
import { PostList } from './postList/PostList';
import { fetchHackerNewsPosts, selectHackerPosts } from '../HackerNewsPosts/HackerNewsPostsSlice.js';
import { fetchRedditPosts, selectPosts } from '../RedditPosts/redditPostsSlice.js';
import { useSelector, useDispatch } from 'react-redux';


const Header = Styled.h1`
    margin: 0 25px 15px 25px;
    padding: 25px 0 0 0;
`;

const Loading = Styled.h2`
    font-size: 1.85rem;
    margin: 10px 0 0 25px;
`;

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

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
        allPosts = shuffle([...tempRedditPosts, ...tempHackerNewsPosts]);
     }

    return (
        <div>
        <Header>All In One</Header>
        { !allPosts.length ? <Loading>Loading...</Loading> : <PostList posts={allPosts}/> }
    </div>
    );
}
