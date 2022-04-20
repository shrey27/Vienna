import './post.css';
import { Fragment } from 'react';
import { useAuthCtx, useTheme } from '../../context';
import { Comment } from './Comments';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likePostHandler, deleteBookmark, addNewBookmark } from '../../service';

export default function Post({ post }) {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { loader, savedBookmark, savedPosts } = useSelector(
    (state) => state.post
  );

  const { token } = useAuthCtx();

  const handleLikeClick = (postId, username) => {
    dispatch(likePostHandler(postId, token));
  };

  const handleBookmarkClick = (postId) => {
    if (savedBookmark.some((item) => item._id === postId)) {
      dispatch(deleteBookmark(postId, token, savedPosts));
    } else {
      dispatch(addNewBookmark(postId, token, savedPosts));
    }
  };

  return (
    <Fragment>
      <div className={`post ${theme === 'dark' && 'darktheme'}`}>
        <Link to={`/profile/${post?.username}`}>
          <div className='post__header'>
            <img src={post?.profilePic} alt='profilepic' />
            <div>
              <h1>{post?.username}</h1>
              <h2>{post?.userId}</h2>
            </div>
          </div>
        </Link>
        {post?.banner && (
          <div className='post__banner__ctr'>
            <img src={post?.banner} className='post__banner' alt='banner' />
          </div>
        )}
        <h1 className='post__title'>{post?.title}</h1>
        <p className='post__paragraph'>{post?.description}</p>
        <div className='post__cta'>
          <button
            onClick={handleLikeClick.bind(this, post?._id, post?.username)}
            className='delete__btn'
            disabled={loader}
          >
            <span className='likebtn'>
              <i
                className={`${
                  post?.likes?.likeCount
                    ? 'fa-solid fa-heart liked'
                    : 'tertiary fa-regular fa-heart'
                } `}
              ></i>
              {post?.likes?.likeCount} Likes
            </span>
          </button>
          <span className='comment'>
            <span>
              <i className='tertiary fa-regular fa-comment'></i>
              {post?.comments} Comments
            </span>
          </span>
          <button
            className='delete__btn'
            disabled={loader}
            onClick={handleBookmarkClick.bind(this, post?._id)}
          >
            <span>
              <i
                className={`tertiary ${
                  post?.bookmarked
                    ? 'fa-solid fa-bookmark'
                    : 'fa-regular fa-bookmark'
                } `}
              ></i>
              {post?.bookmarked}
            </span>
          </button>
          <span>
            <i className='tertiary fa-solid fa-share-nodes'></i>
          </span>
        </div>
      </div>
      <Comment />
    </Fragment>
  );
}
