import Posts from '../homepage/Posts';
import './profile.css';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUserHandler,
  unfollowHandler,
  followHandler
} from '../../service';
import { useAuthCtx } from '../../context';
import { Loader } from '../../components';

export default function UserProfile({ id }) {
  const [userData, setUserData] = useState({});
  const { token } = useAuthCtx();
  const { userFollowing, anyUserDetails, userLoader, userDetails } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserHandler(null, id));
  }, [id, dispatch]);

  useEffect(() => {
    setUserData(anyUserDetails);
  }, [anyUserDetails]);

  const handleUserFollowing = () => {
    if (anyUserDetails?.followers?.includes(id)) {
      dispatch(unfollowHandler(id, token));
    } else {
      dispatch(followHandler(id, userDetails, token));
    }
    dispatch(fetchUserHandler(null, id));
  };

  return (
    <Fragment>
      {userData?.posts?.length ? (
        <div className={`profile`}>
          <section className='profile__box'>
            <div className='profile__image'>
              <img src={userData?.profilePic} alt='profilePic' />
            </div>
            <div className='profile__details'>
              <div className='profile__heading'>
                <h1>{userData?.username}</h1>
                <button
                  onClick={handleUserFollowing}
                  className='btn btn--auth--solid sb'
                >
                  {userFollowing?.some((item) => item._id === id)
                    ? 'Unfollow'
                    : 'Follow'}
                </button>
              </div>
              <h2 className='profile__userId'>{userData?.userHandler}</h2>
              <div className='profile__posts'>
                <span>
                  <strong>{userData?.posts?.length}</strong> Posts
                </span>
                <span>
                  <strong>{userData?.followers?.length}</strong> Followers
                </span>
                <span>
                  <strong>{userData?.following?.length}</strong> Following
                </span>
              </div>
              <p className='profile__paragraph'>{userData?.bio}</p>
              <h1 className='profile__link'>
                <a href='https://github.com/shrey27'>{userData?.portfolio}</a>
              </h1>
            </div>
          </section>
          <div className='loader__box'>
            <Posts posts={userData?.posts} myProfile={false} userId={id} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
}
