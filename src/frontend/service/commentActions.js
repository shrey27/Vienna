import { COMMENT, COMMENTDELETE } from '../routes';
import { postActions } from '../store/postSlice';
import axios from 'axios';
import { ToastMessage } from '../components';
import { sendNewNotification } from './userActions';

export const commentPostHandler = (
  postId,
  comment,
  userId,
  userDetails,
  encodedToken
) => {
  return async (dispatch) => {
    dispatch(postActions.toggleCommentLoader(true));
    const sendComment = async () => {
      const {
        data: { posts }
      } = await axios.post(
        COMMENT + `${postId}`,
        { comment },
        {
          headers: { authorization: encodedToken }
        }
      );
      return posts;
    };

    try {
      const posts = await sendComment();
      dispatch(postActions.getPosts({ posts: posts }));
      const notificationObject = {
        liked: false,
        followed: false,
        comment: true,
        postId: postId,
        username: userDetails.username,
        profilePic: userDetails.profilePic,
        unseen: true
      };
      dispatch(sendNewNotification(userId, notificationObject, encodedToken));
      setTimeout(() => {
        dispatch(postActions.toggleCommentLoader(false));
      }, 1000);
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleCommentLoader(false));
      ToastMessage('Comment action failed', 'error');
    }
  };
};

export const deleteCommentHandler = (postId, commentId, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleCommentLoader(true));
    const sendCommentDeleteRequest = async () => {
      const {
        data: { posts }
      } = await axios.post(
        COMMENTDELETE + `${postId}/${commentId}`,
        {},
        {
          headers: { authorization: encodedToken }
        }
      );
      return posts;
    };

    try {
      const posts = await sendCommentDeleteRequest();
      dispatch(postActions.getPosts({ posts: posts }));
      setTimeout(() => {
        dispatch(postActions.toggleCommentLoader(false));
      }, 1000);
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleCommentLoader(false));
      ToastMessage('Comment Delete action failed', 'error');
    }
  };
};
