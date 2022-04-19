import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    savedPosts: [],
    userPosts: [],
    loader: false,
    bookmarkLoader: false,
    savedBookmark: []
  },
  reducers: {
    toggleLoader(state, action) {
      state.loader = action.payload;
    },
    getPosts(state, action) {
      state.savedPosts = action.payload.posts;
    },
    getuserPosts(state, action) {
      state.userPosts = action.payload.userPosts;
    },
    getBookmark(state, action) {
      state.savedBookmark = action.payload.bookmark;
    },
    toggleBookmarkLoader(state, action) {
      state.bookmarkLoader = action.payload;
    }
  }
});

export const postActions = postSlice.actions;

export default postSlice;
