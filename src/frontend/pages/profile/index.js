import './profile.css';
import { Fragment } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { username } = useParams();

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        {!username || username === 'Carl Jones' ? (
          <MyProfile />
        ) : (
          <UserProfile username={username} />
        )}
      </PageTemplate>
    </Fragment>
  );
}
