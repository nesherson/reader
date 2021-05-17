import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/Main/RedditPosts/redditPostsSlice.js';
import hackerNewsReducer from '../features/Main/HackerNewsPosts/hackerNewsPostsSlice.js';
import newsOptionsReducer from '../features/Sidebar/Navigation/Settings/settingsSlice.js';
import themesReducer from '../features/Sidebar/ThemeToggle/themeToggleSlice.js';

export const store = configureStore({
  reducer: {
    redditPosts: redditReducer,
    hackerNewsPosts: hackerNewsReducer,
    newsOptions: newsOptionsReducer,
    themes: themesReducer,
  },
});
