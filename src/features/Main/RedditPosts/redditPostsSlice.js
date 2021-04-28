import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const redditUrl = 'https://www.reddit.com/r/popular.json';
export const fetchRedditPosts = createAsyncThunk(
    'redditPosts/fetchRedditPosts',
    async() => {
        const response = await fetch(redditUrl);
        try {
            if (response.ok) {
                const posts = await response.json();
                return posts.data.children;
            }
            throw new Error('Request failed!');
        } catch(error) {
            return error;
        }
    }
);

const redditPosts = createSlice({
    name: 'redditPosts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        error: null
    },
    extraReducers: {
        [fetchRedditPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchRedditPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        [fetchRedditPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            state.error = action.payload.error;
        }
    }
}
);

export const selectRedditPosts = (state) => state.redditPosts.posts.map(post => {
    return {
        id: post.data.id,
        author: post.data.author,
        title: post.data.title,
        link: post.data.url,
        score: post.data.ups,
        comment_num: post.data.num_comments
    } 
});

export const selectPosts = (state) => state.redditPosts.posts;
export default redditPosts.reducer;