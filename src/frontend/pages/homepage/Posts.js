import { Fragment } from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
import { useAuthCtx, useTheme } from '../../context';
import {
  deletePost,
  fetchUserPosts,
  addNewBookmark,
  deleteBookmark,
  likePostHandler
} from '../../service';
import { useDispatch, useSelector } from 'react-redux';
import { Empty } from '../../components/empty';

export default function Posts({ posts, myProfile }) {
  const { token } = useAuthCtx();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { bookmarkLoader, loader, savedPosts, likeLoader } = useSelector(
    (state) => state.post
  );

  const handlePostDelete = (postId, username) => {
    if (!loader) {
      dispatch(deletePost(postId, token));
      dispatch(fetchUserPosts(username));
    }
  };

  const handleBookmarkClick = (postId) => {
    const post = savedPosts.find((item) => item._id === postId);
    if (post.bookmarked) {
      dispatch(deleteBookmark(postId, token));
    } else {
      dispatch(addNewBookmark(postId, token));
    }
  };

  const handleLikeClick = (postId, username) => {
    dispatch(likePostHandler(postId, token));
  };

  return (
    <Fragment>
      {posts.length ? (
        <div
          className={`${
            (likeLoader || bookmarkLoader) && 'disablePointerEvents'
          }`}
        >
          {posts.map((elem) => {
            const {
              likes: { likeCount }
            } = elem;
            return (
              <div
                key={elem._id}
                className={`post ${theme === 'dark' && 'darktheme'}`}
              >
                <Link to={`/profile/${elem.username}`}>
                  <div className='post__header'>
                    <img src={elem.profilePic} alt='profilepic' />
                    <div>
                      <h1>{elem.username}</h1>
                      <h2>{elem.userId}</h2>
                    </div>
                  </div>
                </Link>
                <Link to={`/posts/${elem._id}`} className='text'>
                  {elem.banner && (
                    <div className='post__banner__ctr'>
                      <img
                        src={elem.banner}
                        className='post__banner'
                        alt='banner'
                      />
                    </div>
                  )}
                  <h1 className='post__title'>{elem.title}</h1>
                  <p className='post__paragraph'>{elem.description}</p>
                </Link>
                {myProfile ? (
                  <div className='post__cta'>
                    <button
                      onClick={handleLikeClick.bind(
                        this,
                        elem._id,
                        elem.username
                      )}
                      className='delete__btn'
                      disabled={loader}
                    >
                      <span className='likebtn'>
                        <i
                          className={`${
                            likeCount
                              ? 'fa-solid fa-heart liked'
                              : 'tertiary fa-regular fa-heart'
                          } `}
                        ></i>
                        {likeCount} Likes
                      </span>
                    </button>
                    <Link to={`/posts/${elem._id}`} className='comment'>
                      <span>
                        <i className='tertiary fa-regular fa-comment'></i>
                        {elem.comments} Comments
                      </span>
                    </Link>
                    <span>
                      <i className='tertiary fa-solid fa-share-nodes'></i>
                    </span>
                    <button
                      className='delete__btn'
                      disabled={loader}
                      onClick={handlePostDelete.bind(
                        this,
                        elem._id,
                        elem.username
                      )}
                    >
                      <span>
                        <i className='tertiary fa-solid fa-trash'></i>
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className='post__cta'>
                    <button
                      onClick={handleLikeClick.bind(
                        this,
                        elem._id,
                        elem.username
                      )}
                      className='delete__btn'
                      disabled={loader}
                    >
                      <span className='likebtn'>
                        <i
                          className={`${
                            likeCount
                              ? 'fa-solid fa-heart liked'
                              : 'tertiary fa-regular fa-heart'
                          } `}
                        ></i>
                        {likeCount} Likes
                      </span>
                    </button>
                    <Link to={`/posts/${elem._id}`} className='comment'>
                      <span>
                        <i className='tertiary fa-regular fa-comment'></i>
                        {elem.comments} Comments
                      </span>
                    </Link>
                    <button
                      className='delete__btn'
                      disabled={loader}
                      onClick={handleBookmarkClick.bind(this, elem._id)}
                    >
                      <span>
                        <i
                          className={`tertiary ${
                            elem.bookmarked
                              ? 'fa-solid fa-bookmark'
                              : 'fa-regular fa-bookmark'
                          } `}
                        ></i>
                        {elem.bookmarked}
                      </span>
                    </button>
                    <span>
                      <i className='tertiary fa-solid fa-share-nodes'></i>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <Empty />
      )}
    </Fragment>
  );
}
