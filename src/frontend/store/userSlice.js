import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    allUsers: [],
    userDetails: {},
    anyUserDetails: {},
    userLoader: false,
    userFollowing: [],
    notificationLoader: false,
    savedNotifications: []
  },
  reducers: {
    toggleUserLoader(state, action) {
      state.userLoader = action.payload;
    },
    getUser(state, action) {
      const user = action.payload.user;
      state.userDetails = user;
    },
    getFollowing(state, action) {
      state.userFollowing = action.payload.following;
    },
    getAnyUser(state, action) {
      state.anyUserDetails = action.payload.user;
    },
    toggleNotificationLoader(state, action) {
      state.notificationLoader = action.payload;
    },
    getUserNotifications(state, action) {
      state.savedNotifications = action.payload.notifications;
    },
    getAllUsers(state, action) {
      state.allUsers = action.payload.allUsers;
    }
  }
});

export const userApiActions = userSlice.actions;

export default userSlice;
