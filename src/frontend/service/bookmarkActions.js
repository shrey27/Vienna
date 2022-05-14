import { BOOKMARK_API, BOOKMARK_DELETE } from '../routes';
import { postActions } from '../store/postSlice';
import axios from 'axios';
import { ToastMessage } from '../components';

export const addNewBookmark = (postId, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleBookmarkLoader(true));
    const sendBookmarkRequest = async () => {
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
      const bookmarks = await sendBookmarkRequest();
      dispatch(
        postActions.getBookmarks({
          bookmarks
        })
      );
      setTimeout(() => {
        dispatch(postActions.toggleBookmarkLoader(false));
      }, 1000);
      ToastMessage('Post added to Bookmarks', 'success');
    } catch (error) {
      console.log('Add Bookmark', error);
      dispatch(postActions.toggleBookmarkLoader(false));
      ToastMessage('Post was not bookmarked', 'error');
    }
  };
};

export const deleteBookmark = (postId, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.toggleBookmarkLoader(true));
    const deleteBookmarkRequest = async () => {
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
      const bookmarks = await deleteBookmarkRequest();
      dispatch(
        postActions.getBookmarks({
          bookmarks
        })
      );
      setTimeout(() => {
        dispatch(postActions.toggleBookmarkLoader(false));
      }, 1000);
      ToastMessage('Post removed from Bookmarks', 'error');
    } catch (error) {
      console.log('remove bookmark', error);
      dispatch(postActions.toggleBookmarkLoader(false));
      ToastMessage('Post was not removed from bookmarked', 'error');
    }
  };
};
