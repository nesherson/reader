import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const redditUrl = 'https://www.reddit.com/r/popular.json';
export const getRedditPosts = createAsyncThunk(
    'getRedditPosts',
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

const posts = [
    {
        link: '#',
        title: 'Common interface to linux NIC',
        score: 15,
        author: 'Hacker News',
        comment_num: 300
    },
    {
        link: '#',
        title: 'What is most overrated product',
        score: 120,
        author: 'Reddit',
        comment_num: 450
    },
    {
        link: '#',
        title: 'Memegine - A search engine for memes',
        score: 99,
        author: 'Product Hunt',
        comment_num: 78
    },
    {
        link: '#',
        title: 'Twitch becoming softcore pornhub',
        score: 10000,
        author: 'josef',
        comment_num: 896
    }
    ,
    {
        link: '#',
        title: 'Refugees giving back',
        score: 670,
        author: 'eltthu',
        comment_num: 356
    }
];

const redditPosts = createSlice({
    name: 'redditPosts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        error: null
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
    


export default redditPosts.reducer;