import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: { savedPosts: [], userPosts: [], loader: false },
  reducers: {
    toggleLoader(state) {
      state.loader = !state.loader;
    },
    getPosts(state, action) {
      state.savedPosts = action.payload.posts;
      state.loader = false;
    },
    getuserPosts(state, action) {
      state.userPosts = action.payload.userPosts;
      state.loader = false;
    }
  }
});

export const postActions = postSlice.actions;

export default postSlice;
