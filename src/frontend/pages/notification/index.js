import './notification.css';
import { Fragment, useEffect, useState } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components';
import { seenUpdate } from '../../service';
import { useAuthCtx } from '../../context';

function NotificationTabs() {
  const [renderedNotifications, setRenderedNotifications] = useState([]);
  const { notificationLoader, savedNotifications } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const { token } = useAuthCtx();

  useEffect(() => {
    let temp = savedNotifications;
    setRenderedNotifications([...temp].reverse());
    dispatch(seenUpdate(token));
  }, [dispatch, savedNotifications, token]);

  return (
    <Fragment>
      {notificationLoader ? (
        <Loader />
      ) : (
        <>
          {renderedNotifications?.map((elem) => {
            const {
              _id,
              liked,
              followed,
              comment,
              postId,
              username,
              userId,
              profilePic
            } = elem;
            return (
              <div key={_id}>
                <div className='post notification'>
                  <div className='notification__image'>
                    <img src={profilePic} alt='profilePic' />
                  </div>
                  <div className='notification__details'>
                    {liked && (
                      <Link to={`/posts/${postId}`}>
                        <h1>
                          <strong>{username}</strong> liked your post.
                        </h1>
                      </Link>
                    )}
                    {followed && (
                      <Link to={'/userprofile/' + userId}>
                        <h1>
                          <strong>{username}</strong> has started following you
                        </h1>
                      </Link>
                    )}
                    {comment && (
                      <Link to={`/posts/${postId}`}>
                        <h1>
                          <strong>{username}</strong> commented on your post.
                        </h1>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
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
