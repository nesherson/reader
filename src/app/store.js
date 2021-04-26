import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/main/RedditPosts/redditPostsSlice.js'
import hackerNewsReducer from '../features/main/HackerNewsPosts/HackerNewsPostsSlice.js';

export const store = configureStore({
    reducer: {
        redditPosts: redditReducer,
        hackerNewsPosts: hackerNewsReducer,
    }
});