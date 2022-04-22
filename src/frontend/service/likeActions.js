import { LIKE, DISLIKE } from '../routes';
import { postActions } from '../store/postSlice';
import axios from 'axios';
import { ToastMessage } from '../components';
import { sendNewNotification } from './userActions';

export const likePostHandler = (postId, userId, userDetails, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleLikeLoader(true));
    const sendLikRequest = async () => {
      const {
        data: { posts }
      } = await axios.post(
        LIKE + `${postId}`,
        {},
        {
          headers: { authorization: encodedToken }
        }
      );

      return posts;
    };

    try {
      const posts = await sendLikRequest();
      dispatch(
        postActions.getPosts({
          posts
        })
      );
      const notificationObject = {
        liked: true,
        followed: false,
        comment: '',
        postId: postId,
        username: userDetails.username,
        profilePic: userDetails.profilePic,
        unseen: true
      };
      dispatch(sendNewNotification(userId, notificationObject, encodedToken));
      setTimeout(() => {
        dispatch(postActions.toggleLikeLoader(false));
      }, 1000);
    } catch (error) {
      if (error.toString().split(' ').includes('400')) {
        dispatch(dislikePostHandler(postId, encodedToken));
      } else {
        console.error(error);
        dispatch(postActions.toggleLikeLoader(false));
        ToastMessage('Like action failed', 'error');
      }
    }
  };
};

export const dislikePostHandler = (postId, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleLikeLoader(true));
    const sendDislikeRequest = async () => {
      const {
        data: { posts }
      } = await axios.post(
        DISLIKE + `${postId}`,
        {},
        {
          headers: { authorization: encodedToken }
        }
      );
      return posts;
    };

    try {
      const posts = await sendDislikeRequest();
      dispatch(
        postActions.getPosts({
          posts
        })
      );
      setTimeout(() => {
        dispatch(postActions.toggleLikeLoader(false));
      }, 1000);
      // ToastMessage('Post was unliked', 'warning');
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleLikeLoader(false));
      ToastMessage('Dislike action failed', 'error');
    }
  };
};
