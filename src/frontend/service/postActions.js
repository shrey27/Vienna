import { POSTS } from '../routes';
import { postActions } from '../store/postSlice';
import axios from 'axios';

export const fetchAllPosts = () => {
  return async (dispatch) => {
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
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchUserPosts = (username) => {
  return async (dispatch) => {
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
    } catch (error) {
      console.error(error);
    }
  };
};

export const addNewPost = (post, encodedToken) => {
  return async (dispatch) => {
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
    } catch (error) {
      console.error(error);
    }
  };
};

export const deletePost = (postId, encodedToken) => {
  return async (dispatch) => {
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
    } catch (error) {
      console.error(error);
    }
  };
};
