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
      dispatch(postActions.toggleLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleLoader(false));
    }
  };
};

export const fetchUserPosts = (username) => {
  return async (dispatch) => {
    dispatch(postActions.toggleLoader(true));
    const fetchData = async () => {
      const {
        data: { posts }
      } = await axios.get(POSTS + `/user/${username}`);
      return posts;
    };

    try {
      const userPosts = await fetchData();
      dispatch(
        postActions.getuserPosts({
          userPosts
        })
      );
      setTimeout(() => dispatch(postActions.toggleLoader(false)), 100);
    } catch (error) {
      console.error(error);
      setTimeout(() => dispatch(postActions.toggleLoader(false)), 100);
    }
  };
};

export const addNewPost = (post, encodedToken) => {
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
            username: 'Carl Jones',
            userId: '@carljones12',
            profilePic: 'https://www.w3schools.com/howto/img_avatar2.png'
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
      dispatch(postActions.toggleLoader(false));
      ToastMessage('Post created successfully', 'success');
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleLoader(false));
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
      dispatch(postActions.toggleLoader(false));
      ToastMessage('Post deleted successfully', 'warning');
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleLoader(false));
      ToastMessage('Post was not deleted', 'error');
    }
  };
};
