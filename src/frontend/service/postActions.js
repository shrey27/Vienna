import { POSTS } from '../routes';
import { postActions } from '../store/postSlice';
import axios from 'axios';
import { ToastMessage } from '../components';

export const fetchAllPosts = () => {
  return async (dispatch) => {
    dispatch(postActions.toggleLoader(true));
    const fetchData = async () => {
      const {
        data: { posts }
      } = await axios.get(POSTS);
      return posts;
    };

    try {
      const posts = await fetchData();
      dispatch(
        postActions.getPosts({
          posts
        })
      );
      setTimeout(() => {
        dispatch(postActions.toggleLoader(false));
      }, 1000);
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleLoader(false));
    }
  };
};

export const fetchUserPosts = (userId) => {
  return async (dispatch) => {
    dispatch(postActions.toggleLoader(true));
    const fetchData = async () => {
      const {
        data: { posts }
      } = await axios.get(POSTS + `/user/${userId}`);
      return posts;
    };

    try {
      const userPosts = await fetchData();
      dispatch(
        postActions.getuserPosts({
          userPosts
        })
      );
      setTimeout(() => {
        dispatch(postActions.toggleLoader(false));
      }, 1000);
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        dispatch(postActions.toggleLoader(false));
      }, 1000);
    }
  };
};

export const addNewPost = (post, authId, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleLoader(true));
    const sendRequest = async () => {
      const {
        data: { posts }
      } = await axios.post(
        POSTS,
        {
          postData: {
            ...post,
            userId: authId
          }
        },
        { headers: { authorization: encodedToken } }
      );
      return posts;
    };

    try {
      const updatedPosts = await sendRequest();
      dispatch(
        postActions.getPosts({
          posts: updatedPosts
        })
      );
      dispatch(fetchUserPosts(authId));
      setTimeout(() => {
        dispatch(postActions.toggleLoader(false));
      }, 1000);
      ToastMessage('Post created successfully', 'success');
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        dispatch(postActions.toggleLoader(false));
      }, 1000);
      ToastMessage('New post creation failed', 'error');
    }
  };
};

export const deletePost = (postId, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleLoader(true));
    const sendRequest = async () => {
      const {
        data: { posts }
      } = await axios.delete(POSTS + `/${postId}`, {
        headers: { authorization: encodedToken }
      });
      return posts;
    };

    try {
      const updatedPosts = await sendRequest();
      dispatch(
        postActions.getPosts({
          posts: updatedPosts
        })
      );
      setTimeout(() => {
        dispatch(postActions.toggleLoader(false));
      }, 1000);
      ToastMessage('Post deleted successfully', 'warning');
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        dispatch(postActions.toggleLoader(false));
      }, 1000);
      ToastMessage('Post was not deleted', 'error');
    }
  };
};
