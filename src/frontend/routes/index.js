import { Routes, Route } from 'react-router-dom';
import MockAPI from '../../MockMan';
import Homepage from '../pages/homepage';
import IndividualPost from '../pages/individualPost';
import Bookmark from '../pages/bookmark';
import Notification from '../pages/notification';

// Routes
export const HOMEPAGE = '/';
export const MOCKMAN = '/mockman';
export const POST = '/:postId';
export const BOOKMARK = '/bookmark';
export const NOTIFICATION = '/notification';

export const availableRoutes = (
  <Routes>
    <Route exact path={HOMEPAGE} element={<Homepage />} />
    <Route exact path={MOCKMAN} element={<MockAPI />} />
    <Route exct path={POST} element={<IndividualPost />} />
    <Route exct path={BOOKMARK} element={<Bookmark />} />
    <Route exct path={NOTIFICATION} element={<Notification />} />
  </Routes>
);
