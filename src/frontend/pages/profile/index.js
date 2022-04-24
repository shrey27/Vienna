import './profile.css';
import { Fragment, lazy, Suspense } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import { Loader } from '../../components';
const MyProfile = lazy(() => import('./MyProfile'));

export default function Profile() {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <PageTemplate>
          <MyProfile />
        </PageTemplate>
      </Suspense>
    </Fragment>
  );
}
