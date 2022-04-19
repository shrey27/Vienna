import { BOOKMARK_API, BOOKMARK_DELETE } from '../routes';
import { postActions } from '../store/postSlice';
import axios from 'axios';
import { ToastMessage } from '../components';

export const fetchAllBookmarks = (encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleLoader(true));
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
      dispatch(postActions.toggleLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleLoader(false));
      ToastMessage('No Bookmarks were fetched', 'error');
    }
  };
};

export const addNewBookmark = (postId, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleLoader(true));
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
      dispatch(postActions.toggleLoader(false));
      ToastMessage('Post added to Bookmarks', 'success');
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleLoader(false));
      ToastMessage('Post was not bookmarked', 'error');
    }
  };
};

export const deleteBookmark = (postId, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleLoader(true));
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
      dispatch(postActions.toggleLoader(false));
      ToastMessage('Post removed from Bookmarks', 'warning');
    } catch (error) {
      console.error(error);
      dispatch(postActions.toggleLoader(false));
      ToastMessage('Post was not removed from bookmarked', 'error');
    }
  };
};
