import './profile.css';
import { Fragment } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { userId } = useParams();

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>{userId ? <UserProfile /> : <MyProfile />}</PageTemplate>
    </Fragment>
  );
}
