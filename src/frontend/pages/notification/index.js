import './notification.css';
import { Fragment } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import { notifications } from '../../utility/constants';
import { Link } from 'react-router-dom';

function NotificationTabs() {
  return (
    <Fragment>
      {notifications.map((elem) => {
        const { liked, followed, comment, postId, username, profilePic } = elem;
        return (
          <div>
            <Link to={'/' + postId} className='post notification'>
              <div className='notification__image'>
                <img src={profilePic} alt='profilePic' />
              </div>
              <div className='notification__details'>
                <h1>
                  <strong>{username}</strong> {liked && 'liked your post'}
                  {comment && 'commented on your post'}
                  {followed && 'has started following you'}
                </h1>
                {comment && <h2>{comment}</h2>}
              </div>
            </Link>
          </div>
        );
      })}
    </Fragment>
  );
}

export default function Notification() {
  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <NotificationTabs />
      </PageTemplate>
    </Fragment>
  );
}
