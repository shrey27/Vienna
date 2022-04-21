import './profile.css';
import { Fragment } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import UserProfile from './UserProfile';
import { useParams } from 'react-router-dom';

export default function AnyUserProfile() {
  const { userId } = useParams();

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <UserProfile id={userId} />
      </PageTemplate>
    </Fragment>
  );
}
