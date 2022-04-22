import Posts from '../homepage/Posts';
import './profile.css';
import { SETTINGS } from '../../routes';
import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components';
import { fetchUserHandler } from '../../service';
import { useAuthCtx } from '../../context';

export default function MyProfile() {
  const [userData, setUserData] = useState({});
  const [savedUserPosts, setSavedUserPosts] = useState([]);
  const { authenticatedUserId } = useAuthCtx();
  const { userPosts } = useSelector((state) => state.post);
  const { userDetails, userLoader } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserHandler(authenticatedUserId, authenticatedUserId));
  }, [authenticatedUserId, dispatch]);

  useEffect(() => {
    setSavedUserPosts([...userPosts].reverse());
  }, [dispatch, userPosts]);

  useEffect(() => {
    setUserData(userDetails);
  }, [userDetails]);

  return (
    <Fragment>
      {userLoader ? (
        <Loader />
      ) : (
        <div className='profile'>
          <section className='profile__box'>
            <div className='profile__image'>
              <img src={userData?.profilePic} alt='profilePic' />
            </div>
            <div className='profile__details'>
              <div className='profile__heading'>
                <h1>{userData?.username}</h1>
                <Link to={SETTINGS} className='btn btn--auth--solid sb'>
                  Edit Profile
                </Link>
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
          <section className='post profile__options'>
            <span className='profile__option chosen'>
              <i className='fa-regular fa-clone'></i> Posts
            </span>
            <span className='profile__option'>
              <i className='fa-regular fa-heart'></i> Likes
            </span>
            <span className='profile__option'>
              <i className='fa-regular fa-comment'></i> Comments
            </span>
          </section>
          <div className='loader__box'>
            {savedUserPosts.length && (
              <Posts posts={savedUserPosts} myProfile={true} />
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}
