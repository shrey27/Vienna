import { availableRoutes } from './frontend/routes';
import { Navbar, Footer } from './frontend/components';
import { useAuthCtx, useTheme } from './frontend/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userApiActions } from './frontend/store/userSlice';
import {
  fetchAllPosts,
  fetchAllUsers,
  fetchUserHandler,
  fetchUserPosts
} from './frontend/service';

function App() {
  const { theme } = useTheme();
  const { authenticatedUserId, username } = useAuthCtx();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      dispatch(fetchUserHandler(authenticatedUserId, authenticatedUserId));
      dispatch(fetchUserPosts(username));
    } else {
      const user = JSON.parse(storedData);
      dispatch(
        userApiActions.getUser({
          user
        })
      );
      dispatch(
        userApiActions.getFollowing({
          following: user?.following
        })
      );
      dispatch(
        userApiActions.getUserNotifications({
          notifications: user?.notifications
        })
      );
    }
  }, [authenticatedUserId, dispatch, username]);

  return (
    <div data-theme={theme}>
      <Navbar />
      {availableRoutes}
      <ToastContainer style={{ fontWeight: '500', fontSize: '1.25rem' }} />
      <Footer />
    </div>
  );
}

export default App;
