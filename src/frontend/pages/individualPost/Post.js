import './post.css';
import { Fragment } from 'react';
import { useAuthCtx, useTheme } from '../../context';
import { Comment } from './Comments';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likePostHandler, deleteBookmark, addNewBookmark } from '../../service';
import { useUserId } from '../../helper';

export default function Post({ post }) {
  const { theme } = useTheme();
  const user = useUserId(post?.userId);
  const dispatch = useDispatch();
  const { loader, savedBookmarks } = useSelector((state) => state.post);
  const { userDetails } = useSelector((state) => state.user);

  const { token } = useAuthCtx();

  const handleLikeClick = (postId, userId) => {
    if (localStorage.getItem('userData')) {
      const { _id } = JSON.parse(localStorage.getItem('userData'));
      dispatch(likePostHandler(postId, userId, _id, userDetails, token));
    }
  };

  const handleBookmarkClick = (postId) => {
    if (savedBookmarks.includes(postId)) {
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
        <Link to={'/userprofile/' + post?.userId}>
          <div className='post__header'>
            <img src={user?.profilePic} alt='profilepic' />
            <div>
              <h1>{user?.username}</h1>
              <h2>{user?.userHandler}</h2>
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
            onClick={handleLikeClick.bind(this, post?._id, post?.userId)}
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
            <span className='bookmark'>
              <i
                className={`tertiary ${
                  savedBookmarks.includes(post?._id)
                    ? 'fa-solid fa-bookmark'
                    : 'fa-regular fa-bookmark'
                } `}
              ></i>
              Bookmark
            </span>
          </button>
        </div>
      </div>
      <Comment postId={post?._id} />
    </Fragment>
  );
}
