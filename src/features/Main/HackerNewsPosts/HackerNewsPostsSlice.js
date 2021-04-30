import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const hackerNewsUrl = 'https://hacker-news.firebaseio.com//v0/topstories.json';

export const fetchHackerNewsPosts = createAsyncThunk(
    'hackerNewsPosts/fetchHackerNewsPosts',
    async () => {
        const ids = await fetch(hackerNewsUrl).then(resp => resp.json());  
        return Promise.all(ids.slice(0, 15).map(async id => {
            return await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(resp => resp.json());   
        }));
    }
);

const hackerNewsPosts = createSlice({
    name: 'hackerNewsPosts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        error: null
    },
    extraReducers: {
        [fetchHackerNewsPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchHackerNewsPosts.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
            state.posts = action.payload;
        },
        [fetchHackerNewsPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            state.error = action.payload.error;
        }
    }
}
);

export default hackerNewsPosts.reducer;

export const selectHackerNewsPosts = (state) => state.hackerNewsPosts.posts;