import Posts from '../homepage/Posts';
import './profile.css';
import { SETTINGS, PROFILE, FOLLOWERLIST, FOLLOWINGLIST } from '../../routes';
import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Empty, Loader } from '../../components';
import { fetchUserHandler } from '../../service';
import { useAuthCtx, useTheme } from '../../context';
import { useQueryParams } from '../../helper';

export default function MyProfile() {
  const { tab } = useQueryParams();
  const { theme } = useTheme();
  const [userData, setUserData] = useState({});
  const [savedUserPosts, setSavedUserPosts] = useState([]);
  const { authenticatedUserId } = useAuthCtx();
  const { userPosts } = useSelector((state) => state.post);
  const { userDetails, userLoader, allUsers } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const findUser = (userId) => {
    return allUsers?.find((item) => item._id === userId);
  };

  useEffect(() => {
    dispatch(fetchUserHandler(authenticatedUserId, authenticatedUserId));
  }, [authenticatedUserId, dispatch]);

  useEffect(() => {
    setSavedUserPosts([...userPosts].reverse());
  }, [dispatch, userPosts]);

  useEffect(() => {
    console.log('user details', userDetails);
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
            <Link
              to={PROFILE + '?tab=posts'}
              className={`profile__option ${tab === 'posts' ? 'chosen' : ''}`}
            >
              <i className='fa-regular fa-clone'></i> Posts
            </Link>
            <Link
              to={FOLLOWERLIST}
              className={`profile__option ${
                tab === 'follower' ? 'chosen' : ''
              }`}
            >
              <i className='fa-solid fa-user-group'></i> Followers
            </Link>
            <Link
              to={FOLLOWINGLIST}
              className={`profile__option ${
                tab === 'following' ? 'chosen' : ''
              }`}
            >
              <i className='fa-solid fa-user-group'></i> Following
            </Link>
          </section>
          {tab === 'posts' && (
            <>
              {savedUserPosts.length ? (
                <Posts
                  posts={savedUserPosts}
                  myProfile={true}
                  userId={authenticatedUserId}
                />
              ) : (
                <Empty />
              )}
            </>
          )}
          {tab === 'follower' && (
            <section className='post profile__options'>
              {userDetails?.followers?.length ? (
                userDetails?.followers.map((elem) => {
                  const user = findUser(elem._id);
                  return (
                    <Link
                      to={'/userprofile/' + elem?._id}
                      className={`profile__option post__header follow ${
                        theme === 'dark' && 'darktheme'
                      }`}
                    >
                      <img src={user?.profilePic} alt='profilePic' />
                      <div>
                        <h1>{user?.username}</h1>
                        <h2>{user?.userHandler}</h2>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <Empty />
              )}
            </section>
          )}
          {tab === 'following' && (
            <section className='post profile__options'>
              {userDetails?.following?.length ? (
                userDetails?.following.map((elem) => {
                  const user = findUser(elem._id);
                  return (
                    <Link
                      to={'/userprofile/' + elem?._id}
                      className={`post__header follow ${
                        theme === 'dark' && 'darktheme'
                      }`}
                    >
                      <img src={user?.profilePic} alt='profilePic' />
                      <div>
                        <h1>{user?.username}</h1>
                        <h2>{user?.userHandler}</h2>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <Empty />
              )}
            </section>
          )}
        </div>
      )}
    </Fragment>
  );
}
