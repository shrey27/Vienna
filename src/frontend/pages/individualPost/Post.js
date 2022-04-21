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
  const { loader, savedPosts } = useSelector((state) => state.post);

  const { token } = useAuthCtx();

  const handleLikeClick = (postId, username) => {
    dispatch(likePostHandler(postId, token));
  };

  const handleBookmarkClick = (postId) => {
    const post = savedPosts.find((item) => item._id === postId);
    if (post.bookmarked) {
      dispatch(deleteBookmark(postId, token));
    } else {
      dispatch(addNewBookmark(postId, token));
    }
  };

  return (
    <Fragment>
      <div
        className={`post commentpage ${theme === 'dark' && 'darktheme'} ${
          loader && 'disablePointerEvents'
        }`}
      >
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
              {post?.comments?.length} Comments
            </span>
          </span>
          <button
            className='delete__btn'
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
      <Comment postId={post?._id} />
    </Fragment>
  );
}
