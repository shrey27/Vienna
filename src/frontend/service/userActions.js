import { USER } from '../routes';
import { userApiActions } from '../store/userSlice';
import axios from 'axios';

export const fetchUserHandler = (userId) => {
  return async (dispatch) => {
    dispatch(userApiActions.toggleUserLoader(true));
    const getUserRequest = async () => {
      const {
        data: { user }
      } = await axios.get(USER + `${userId}`);
      return user;
    };

    try {
      const user = await getUserRequest();
      console.log(user);
      dispatch(
        userApiActions.getUser({
          user
        })
      );
      setTimeout(() => {
        dispatch(userApiActions.toggleUserLoader(false));
      }, 1000);
    } catch (error) {
      console.error(error);
      dispatch(userApiActions.toggleUserLoader(false));
    }
  };
};
