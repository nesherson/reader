import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/main/RedditPosts/redditPostsSlice.js'
import hackerNewsReducer from '../features/main/HackerNewsPosts/HackerNewsPostsSlice.js';
import newsOptionsReducer from '../features/sidebar/Navigation/navigationSlice.js';

export const store = configureStore({
    reducer: {
        redditPosts: redditReducer,
        hackerNewsPosts: hackerNewsReducer,
        newsOptions: newsOptionsReducer,
    }
});