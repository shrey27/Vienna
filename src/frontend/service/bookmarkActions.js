import { BOOKMARK_API, BOOKMARK_DELETE } from '../routes';
import { postActions } from '../store/postSlice';
import axios from 'axios';
import { ToastMessage } from '../components';

export const fetchAllBookmarks = (encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleBookmarkLoader(true));
    const fetchData = async () => {
      const {
        data: { bookmarks }
      } = await axios.get(BOOKMARK_API, {
        headers: { authorization: encodedToken }
      });
      return bookmarks;
    };

    try {
      const bookmark = await fetchData();
      dispatch(
        postActions.getBookmark({
          bookmark
        })
      );
      dispatch(postActions.toggleBookmarkLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleBookmarkLoader(false));
      ToastMessage('No Bookmarks were fetched', 'error');
    }
  };
};

export const addNewBookmark = (postId, encodedToken, posts) => {
  return async (dispatch) => {
    dispatch(postActions.toggleBookmarkLoader(true));
    const sendRequest = async () => {
      const {
        data: { bookmarks }
      } = await axios.post(
        BOOKMARK_API + `/${postId}`,
        {},
        {
          headers: { authorization: encodedToken }
        }
      );
      return bookmarks;
    };

    try {
      const bookmark = await sendRequest();
      dispatch(
        postActions.getBookmark({
          bookmark
        })
      );
      let temp = posts.reduce(
        (acc, curr) =>
          curr._id === postId
            ? [...acc, { ...curr, bookmarked: true }]
            : [...acc, curr],
        []
      );
      dispatch(
        postActions.getPosts({
          posts: temp
        })
      );
      setTimeout(() => {
        dispatch(postActions.toggleBookmarkLoader(false));
      }, 1500);
      ToastMessage('Post added to Bookmarks', 'success');
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleBookmarkLoader(false));
      ToastMessage('Post was not bookmarked', 'error');
    }
  };
};

export const deleteBookmark = (postId, encodedToken, posts) => {
  return async (dispatch) => {
    dispatch(postActions.toggleBookmarkLoader(true));
    const sendRequest = async () => {
      const {
        data: { bookmarks }
      } = await axios.post(
        BOOKMARK_DELETE + `/${postId}`,
        {},
        {
          headers: { authorization: encodedToken }
        }
      );
      return bookmarks;
    };

    try {
      const bookmark = await sendRequest();
      dispatch(
        postActions.getBookmark({
          bookmark
        })
      );
      let temp = posts.reduce(
        (acc, curr) =>
          curr._id === postId
            ? [...acc, { ...curr, bookmarked: false }]
            : [...acc, curr],
        []
      );
      dispatch(
        postActions.getPosts({
          posts: temp
        })
      );
      setTimeout(() => {
        dispatch(postActions.toggleBookmarkLoader(false));
      }, 1500);
      ToastMessage('Post removed from Bookmarks', 'error');
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleBookmarkLoader(false));
      ToastMessage('Post was not removed from bookmarked', 'error');
    }
  };
};
