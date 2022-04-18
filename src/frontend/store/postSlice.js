import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: { savedPosts: [], userPosts: [] },
  reducers: {
    getPosts(state, action) {
      state.savedPosts = action.payload.posts;
    },
    getuserPosts(state, action) {
      state.userPosts = action.payload.userPosts;
    }
  }
});

export const postActions = postSlice.actions;

export default postSlice;
