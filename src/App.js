import { availableRoutes } from './frontend/routes';
import { Navbar, Footer } from './frontend/components';
import { useAuthCtx, useTheme } from './frontend/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userApiActions } from './frontend/store/userSlice';
import { fetchAllPosts, fetchUserHandler } from './frontend/service';

function App() {
  const { theme } = useTheme();
  const { authenticatedUserId } = useAuthCtx();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      dispatch(fetchUserHandler(authenticatedUserId, authenticatedUserId));
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
    }
  }, [authenticatedUserId, dispatch]);

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
