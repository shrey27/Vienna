import { Routes, Route } from 'react-router-dom';
import MockAPI from '../../MockMan';
import Homepage from '../pages/homepage';

// Routes
export const HOMEPAGE = '/';
export const MOCKMAN = '/mockman';

export const availableRoutes = (
  <Routes>
    <Route exact path={HOMEPAGE} element={<Homepage />} />
    <Route exact path={MOCKMAN} element={<MockAPI />} />
  </Routes>
);
