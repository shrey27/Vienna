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
import { usePostId, useUserId } from '../../helper';

export default function SinglePost({ myProfile, userId, postId }) {
  const { token } = useAuthCtx();
  const { theme } = useTheme();
  const user = useUserId(userId);
  const post = usePostId(postId);
  const dispatch = useDispatch();
  const { loader, savedPosts } = useSelector((state) => state.post);
  const { userDetails } = useSelector((state) => state.user);

  const handlePostDelete = () => {
    if (!loader) {
      dispatch(deletePost(postId, token));
      dispatch(fetchUserPosts(userId));
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

  const handleLikeClick = () => {
    dispatch(likePostHandler(postId, userId, userDetails, token));
  };

  return (
    <div className={`post ${theme === 'dark' ? 'darktheme' : ''}`}>
      <Link to={'/userprofile/' + userId}>
        <div className='post__header'>
          <img src={user?.profilePic} alt='profilepic' />
          <div>
            <h1>{user?.username}</h1>
            <h2>{user?.userHandler}</h2>
          </div>
        </div>
      </Link>
      <Link to={`/posts/${post?._id}`} className='text'>
        {post?.banner && (
          <div className='post__banner__ctr'>
            <img src={post?.banner} className='post__banner' alt='banner' />
          </div>
        )}
        <h1 className='post__title'>{post?.title}</h1>
        <p className='post__paragraph'>{post?.description}</p>
      </Link>
      {myProfile ? (
        <div className='post__cta'>
          <button
            onClick={handleLikeClick}
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
          <Link to={`/posts/${postId}`} className='comment'>
            <span>
              <i className='tertiary fa-regular fa-comment'></i>
              {post?.comments?.length} Comments
            </span>
          </Link>
          <span>
            <i className='tertiary fa-solid fa-share-nodes'></i>
          </span>
          <button
            className='delete__btn'
            disabled={loader}
            onClick={handlePostDelete}
          >
            <span>
              <i className='tertiary fa-solid fa-trash'></i>
            </span>
          </button>
        </div>
      ) : (
        <div className='post__cta'>
          <button
            onClick={handleLikeClick}
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
          <Link to={`/posts/${postId}`} className='comment'>
            <span>
              <i className='tertiary fa-regular fa-comment'></i>
              {post?.comments?.length} Comments
            </span>
          </Link>
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
      )}
    </div>
  );
}
