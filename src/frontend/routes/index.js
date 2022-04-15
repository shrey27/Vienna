import { Routes, Route } from 'react-router-dom';
import MockAPI from '../../MockMan';
import Homepage from '../pages/homepage';
import Post from '../pages/individualPost';

// Routes
export const HOMEPAGE = '/';
export const MOCKMAN = '/mockman';
export const POST = '/:postId';

export const availableRoutes = (
  <Routes>
    <Route exact path={HOMEPAGE} element={<Homepage />} />
    <Route exact path={MOCKMAN} element={<MockAPI />} />
    <Route exct path={POST} element={<Post />} />
  </Routes>
);
