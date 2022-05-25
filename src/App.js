import { availableRoutes } from './frontend/routes';
import { Navbar, Footer } from './frontend/components';
import { useAuthCtx } from './frontend/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userApiActions } from './frontend/store/userSlice';
import { postActions } from './frontend/store/postSlice';
import {
  fetchAllPosts,
  fetchAllUsers,
  fetchUserHandler,
  fetchUserPosts
} from './frontend/service';

function App() {
  const { authenticatedUserId } = useAuthCtx();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      dispatch(fetchUserHandler(authenticatedUserId, authenticatedUserId));
      dispatch(fetchUserPosts(authenticatedUserId));
    } else {
      const user = JSON.parse(storedData);
      dispatch(
        userApiActions.getUser({
          user
        })
      );
      dispatch(
        postActions.getuserPosts({
          userPosts: user.posts
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
  }, [authenticatedUserId, dispatch]);

  return (
    <div>
      <Navbar />
      {availableRoutes}
      <ToastContainer style={{ fontWeight: '500', fontSize: '1.25rem' }} />
      <Footer />
    </div>
  );
}

export default App;
