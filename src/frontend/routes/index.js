import { Routes, Route } from 'react-router-dom';
import MockAPI from '../../MockMan';
import Homepage from '../pages/homepage';
import IndividualPost from '../pages/individualPost';
import ExploreFeed from '../pages/explore';
import Bookmark from '../pages/bookmark';
import Notification from '../pages/notification';
import Profile from '../pages/profile';
import AnyUserProfile from '../pages/anyProfile';
import Settings from '../pages/settings';
import Signin from '../pages/authentication/Signin';
import Signup from '../pages/authentication/Signup';
import Landing from '../pages/landing';
import NotFound from '../pages/notfound';
import PrivateRoute from './PrivateRoute';

// API Endpoints
export const SIGN_UP = '/api/auth/signup';
export const SIGN_IN = '/api/auth/login';
export const POSTS = '/api/posts';
export const BOOKMARK_API = '/api/users/bookmark';
export const BOOKMARK_DELETE = '/api/users/remove-bookmark';
export const LIKE = '/api/posts/like/';
export const DISLIKE = '/api/posts/dislike/';
export const COMMENT = '/api/post/comment/';
export const COMMENTDELETE = '/api/post/commentdelete/';
export const USER = '/api/users/';
export const FOLLOWUSER = '/api/users/follow/';
export const UNFOLLOWUSER = '/api/users/unfollow/';
export const NOTIFICATIONAPI = '/api/users/notification';
export const SEEN = '/api/users/seen';
export const EDIT = '/api/users/edit';

// Routes
export const LANDING = '/';
export const HOMEPAGE = '/homepage';
export const MOCKMAN = '/mockman';
export const POST = '/posts/:postId';
export const BOOKMARK = '/bookmark';
export const NOTIFICATION = '/notification';
export const PROFILE = '/profile';
export const FOLLOWERLIST = '/profile?tab=follower';
export const FOLLOWINGLIST = '/profile?tab=following';
export const USERPROFILE = '/userprofile/:userId';
export const SETTINGS = '/settings';
export const EXPLORE = '/explore';
export const SIGNIN = '/signin';
export const SIGNUP = '/signup';
export const NOTFOUND = '*';

export const availableRoutes = (
  <Routes>
    <Route exact path={LANDING} element={<Landing />} />
    <Route exact path={MOCKMAN} element={<MockAPI />} />
    <Route exact path={SIGNIN} element={<Signin />} />
    <Route exact path={SIGNUP} element={<Signup />} />
    <Route path={NOTFOUND} element={<NotFound />} />

    <Route exact path={LANDING} element={<PrivateRoute />}>
      <Route exact path={HOMEPAGE} element={<Homepage />} />
      <Route exact path={POST} element={<IndividualPost />} />
      <Route exact path={EXPLORE} element={<ExploreFeed />} />
      <Route exact path={BOOKMARK} element={<Bookmark />} />
      <Route exact path={NOTIFICATION} element={<Notification />} />
      <Route exact path={PROFILE} element={<Profile />} />
      <Route exact path={FOLLOWERLIST} element={<Profile />} />
      <Route exact path={FOLLOWINGLIST} element={<Profile />} />
      <Route exact path={USERPROFILE} element={<AnyUserProfile />} />
      <Route exact path={SETTINGS} element={<Settings />} />
    </Route>
  </Routes>
);
