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
// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: 'pending',
//         title: 'Sending...',
//         message: 'Sending cart data!'
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         'https://react-http-6b4a6.firebaseio.com/cart.json',
//         {
//           method: 'PUT',
//           body: JSON.stringify({
//             items: cart.items,
//             totalQuantity: cart.totalQuantity
//           })
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Sending cart data failed.');
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: 'success',
//           title: 'Success!',
//           message: 'Sent cart data successfully!'
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: 'error',
//           title: 'Error!',
//           message: 'Sending cart data failed!'
//         })
//       );
//     }
//   };
// };
