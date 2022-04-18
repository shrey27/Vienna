import { Routes, Route } from 'react-router-dom';
import MockAPI from '../../MockMan';
import Homepage from '../pages/homepage';
import IndividualPost from '../pages/individualPost';
import ExploreFeed from '../pages/explore';
import Bookmark from '../pages/bookmark';
import Notification from '../pages/notification';
import Profile from '../pages/profile';
import Settings from '../pages/settings';
import Signin from '../pages/authentication/Signin';
import Signup from '../pages/authentication/Signup';
import Landing from '../pages/landing';

// API Endpoints
export const SIGN_UP = '/api/auth/signup';
export const SIGN_IN = '/api/auth/login';
export const POSTS = '/api/posts';

// Routes
export const LANDING = '/landing';
export const HOMEPAGE = '/';
export const MOCKMAN = '/mockman';
export const POST = '/:postId';
export const BOOKMARK = '/bookmark';
export const NOTIFICATION = '/notification';
export const PROFILE = '/profile';
export const USERPROFILE = '/profile/:userId';
export const SETTINGS = '/settings';
export const EXPLORE = '/explore';
export const SIGNIN = '/signin';
export const SIGNUP = '/signup';

export const availableRoutes = (
  <Routes>
    <Route exact path={LANDING} element={<Landing />} />
    <Route exact path={HOMEPAGE} element={<Homepage />} />
    <Route exact path={MOCKMAN} element={<MockAPI />} />
    <Route exct path={POST} element={<IndividualPost />} />
    <Route exct path={EXPLORE} element={<ExploreFeed />} />
    <Route exct path={BOOKMARK} element={<Bookmark />} />
    <Route exct path={NOTIFICATION} element={<Notification />} />
    <Route exct path={PROFILE} element={<Profile />} />
    <Route exct path={USERPROFILE} element={<Profile />} />
    <Route exct path={SETTINGS} element={<Settings />} />
    <Route exct path={SIGNIN} element={<Signin />} />
    <Route exct path={SIGNUP} element={<Signup />} />
  </Routes>
);
