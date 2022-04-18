import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: { savedPosts: [] },
  reducers: {
    getPosts(state, action) {
      state.savedPosts = action.payload.posts;
    }
  }
});

export const postActions = postSlice.actions;

export default postSlice;
