import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    savedPosts: [],
    userPosts: [],
    loader: false,
    bookmarkLoader: false,
    likeLoader: false
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
    toggleBookmarkLoader(state, action) {
      state.bookmarkLoader = action.payload;
    },
    toggleLikeLoader(state, action) {
      state.likeLoader = action.payload;
    }
  }
});

export const postActions = postSlice.actions;

export default postSlice;
