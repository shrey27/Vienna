import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { userDetails: {}, userLoader: false },
  reducers: {
    toggleUserLoader(state, action) {
      state.userLoader = action.payload;
    },
    getUser(state, action) {
      state.userDetails = action.payload.user;
    }
  }
});

export const userApiActions = userSlice.actions;

export default userSlice;
