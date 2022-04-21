import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: {},
    anyUserDetails: {},
    userLoader: false,
    followers: []
  },
  reducers: {
    toggleUserLoader(state, action) {
      state.userLoader = action.payload;
    },
    getUser(state, action) {
      const user = action.payload.user;
      state.userDetails = user;
    },
    getAnyUser(state, action) {
      state.anyUserDetails = action.payload.user;
    }
  }
});

export const userApiActions = userSlice.actions;

export default userSlice;
