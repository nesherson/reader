import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/main/mainSlice.js'

export const store = configureStore({
    reducer: {
        redditPosts: redditReducer,
    }
});