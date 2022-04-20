import { LIKE, DISLIKE } from '../routes';
import { postActions } from '../store/postSlice';
import axios from 'axios';
import { ToastMessage } from '../components';

export const likePostHandler = (postId, encodedToken) => {
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
      setTimeout(() => {
        dispatch(postActions.toggleLikeLoader(false));
      }, 1000);
      //   ToastMessage('Post was liked', 'success');
    } catch (error) {
      // console.error(error);
      // dispatch(postActions.toggleLikeLoader(false));
      // ToastMessage('Like action failed', 'error');
      dispatch(dislikePostHandler(postId, encodedToken));
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
