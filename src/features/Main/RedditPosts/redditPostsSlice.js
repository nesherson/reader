import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const redditUrl = 'https://www.reddit.com/r/popular.json';
export const getRedditPosts = createAsyncThunk(
    'redditPosts/getRedditPosts',
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
    reducers: {
        handleSelected: (state, action) => {
            state.isSelected = action.payload;
        }
    },
    extraReducers: {
        [getRedditPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getRedditPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        [getRedditPosts.rejected]: (state, action) => {
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

export const selectIsSelected = (state) => state.redditPosts.isSelected;
export const { handleSelected } = redditPosts.actions;
    


export default redditPosts.reducer;