import './profile.css';
import { Fragment, lazy, Suspense } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components';
const UserProfile = lazy(() => import('./UserProfile'));

export default function AnyUserProfile() {
  const { userId } = useParams();

  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <PageTemplate>
          <UserProfile id={userId} />
        </PageTemplate>
      </Suspense>
    </Fragment>
  );
}
