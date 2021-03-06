import {
  USER,
  FOLLOWUSER,
  UNFOLLOWUSER,
  NOTIFICATIONAPI,
  SEEN,
  EDIT
} from '../routes';
import { userApiActions } from '../store/userSlice';
import axios from 'axios';
import { ToastMessage } from '../components';

export const fetchAllUsers = () => {
  return async (dispatch) => {
    dispatch(userApiActions.toggleUserLoader(true));
    const getAllUserRequest = async () => {
      const {
        data: { users }
      } = await axios.get(USER);
      return users;
    };

    try {
      const allUsers = await getAllUserRequest();
      dispatch(
        userApiActions.getAllUsers({
          allUsers
        })
      );
      dispatch(userApiActions.toggleUserLoader(false));
    } catch (error) {
      console.log('Fetch All Users', error);
      dispatch(userApiActions.toggleUserLoader(false));
      ToastMessage('Try again later');
    }
  };
};

export const fetchUserHandler = (authId, userId) => {
  return async (dispatch) => {
    dispatch(userApiActions.toggleUserLoader(true));
    const getUserRequest = async () => {
      const {
        data: { user }
      } = await axios.get(USER + `${userId}`);
      return user;
    };

    try {
      const user = await getUserRequest();
      if (authId) {
        dispatch(
          userApiActions.getUser({
            user
          })
        );

        dispatch(
          userApiActions.getFollowing({
            following: user.following
          })
        );
        dispatch(
          userApiActions.getUserNotifications({
            notifications: user.notifications
          })
        );
      } else {
        dispatch(
          userApiActions.getAnyUser({
            user
          })
        );
      }
      dispatch(userApiActions.toggleUserLoader(false));
    } catch (error) {
      console.log('Fetch User', error);
      dispatch(userApiActions.toggleUserLoader(false));
      ToastMessage('Try again later');
    }
  };
};

export const editUserHandler = (userData, encodedToken, authId) => {
  return async (dispatch) => {
    dispatch(userApiActions.toggleUserLoader(true));
    const updateUserRequest = async () => {
      const {
        data: { user }
      } = await axios.post(
        EDIT,
        { userData },
        {
          headers: { authorization: encodedToken }
        }
      );
      return user;
    };

    try {
      const user = await updateUserRequest();
      dispatch(
        userApiActions.getUser({
          user
        })
      );
      dispatch(fetchAllUsers());
      dispatch(
        userApiActions.getFollowing({
          following: user.following
        })
      )
      dispatch(
        userApiActions.getUserNotifications({
          notifications: user.notifications
        })
      );
      dispatch(userApiActions.toggleUserLoader(false));
      ToastMessage('User Details Updated', 'success');
    } catch (error) {
      console.log('Edit User', error);
      dispatch(userApiActions.toggleUserLoader(false));
      ToastMessage('Try again later', 'error');
    }
  };
};

export const followHandler = (userId, userDetails, encodedToken) => {
  return async (dispatch) => {
    dispatch(userApiActions.toggleUserLoader(true));
    const followUserRequest = async () => {
      const {
        data: { user }
      } = await axios.post(
        FOLLOWUSER + `${userId}`,
        {},
        {
          headers: { authorization: encodedToken }
        }
      );
      return user;
    };

    try {
      const user = await followUserRequest();
      dispatch(
        userApiActions.getUser({
          user
        })
      );
      dispatch(
        userApiActions.getFollowing({
          following: user.following
        })
      );
      const notificationObject = {
        liked: false,
        followed: true,
        comment: '',
        postId: null,
        username: userDetails.username,
        profilePic: userDetails.profilePic,
        unseen: true
      };
      dispatch(sendNewNotification(userId, notificationObject, encodedToken));
      dispatch(userApiActions.toggleUserLoader(false));
      ToastMessage('User added to following List', 'success');
    } catch (error) {
      if (error.toString().split(' ').includes('400')) {
        dispatch(unfollowHandler(userId, encodedToken));
      } else {
        console.log('Follow User', error);
        dispatch(userApiActions.toggleUserLoader(false));
        ToastMessage('Follow action failed', 'error');
      }
    }
  };
};

export const unfollowHandler = (userId, encodedToken) => {
  return async (dispatch) => {
    dispatch(userApiActions.toggleUserLoader(true));
    const unfollowUserRequest = async () => {
      const {
        data: { user }
      } = await axios.post(
        UNFOLLOWUSER + `${userId}`,
        {},
        {
          headers: { authorization: encodedToken }
        }
      );
      return user;
    };

    try {
      const user = await unfollowUserRequest();
      dispatch(
        userApiActions.getUser({
          user
        })
      );
      dispatch(
        userApiActions.getFollowing({
          following: user.following
        })
      );
      dispatch(fetchUserHandler(null, userId));
      dispatch(userApiActions.toggleUserLoader(false));
      ToastMessage('User removed from following List', 'error');
    } catch (error) {
      console.log('Unfollow User', error);
      dispatch(userApiActions.toggleUserLoader(false));
      ToastMessage('Unfollow action failed', 'error');
    }
  };
};

export const fetchNotifications = (encodedToken) => {
  return async (dispatch) => {
    dispatch(userApiActions.toggleNotificationLoader(true));
    const getNotifications = async () => {
      const {
        data: { notifications }
      } = await axios.get(NOTIFICATIONAPI, {
        headers: { authorization: encodedToken }
      });
      return notifications;
    };

    try {
      const notifications = await getNotifications();
      dispatch(
        userApiActions.getUserNotifications({
          notifications
        })
      );
      dispatch(userApiActions.toggleNotificationLoader(false));
    } catch (error) {
      console.log('Fetch Notifications', error);
      dispatch(userApiActions.toggleNotificationLoader(false));
    }
  };
};

export const sendNewNotification = (
  userId,
  notificationObject,
  encodedToken
) => {
  return async (dispatch) => {
    dispatch(userApiActions.toggleUserLoader(true));
    const updateNotifications = async () => {
      const {
        data: { notifications }
      } = await axios.post(
        NOTIFICATIONAPI + '/' + userId,
        { notificationObject },
        {
          headers: { authorization: encodedToken }
        }
      );
      return notifications;
    };

    try {
      await updateNotifications();
      dispatch(userApiActions.toggleNotificationLoader(false));
    } catch (error) {
      console.log('New Notification', error);
      dispatch(userApiActions.toggleNotificationLoader(false));
    }
  };
};

export const seenUpdate = (encodedToken) => {
  return async (dispatch) => {
    dispatch(userApiActions.toggleUserLoader(true));
    const updateSeenNotifications = async () => {
      const {
        data: { notifications }
      } = await axios.post(
        SEEN,
        {},
        {
          headers: { authorization: encodedToken }
        }
      );
      return notifications;
    };

    try {
      const notifications = await updateSeenNotifications();
      dispatch(
        userApiActions.getUserNotifications({
          notifications
        })
      );
      dispatch(userApiActions.toggleNotificationLoader(false));
    } catch (error) {
      console.log('Seen Update', error);
      dispatch(userApiActions.toggleNotificationLoader(false));
    }
  };
};
