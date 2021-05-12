import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/Main/RedditPosts/redditPostsSlice.js';
import hackerNewsReducer from '../features/Main/HackerNewsPosts/hackerNewsPostsSlice.js';
import newsOptionsReducer from '../features/sidebar/Navigation/navigationSlice.js';
import themesReducer from '../features/sidebar/themeToggle/themeToggleSlice.js';

export const store = configureStore({
  reducer: {
    redditPosts: redditReducer,
    hackerNewsPosts: hackerNewsReducer,
    newsOptions: newsOptionsReducer,
    themes: themesReducer,
  },
});
