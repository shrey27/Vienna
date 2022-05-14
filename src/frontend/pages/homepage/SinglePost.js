import './homepage.css';
import { Link, useLocation } from 'react-router-dom';
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
import { EditPostModal } from '../../components';
import { Fragment, useState } from 'react';

export default function SinglePost({ myProfile, userId, postId }) {
  const { token } = useAuthCtx();
  const { theme } = useTheme();
  const user = useUserId(userId);
  const post = usePostId(postId);
  const location = useLocation();

  const dispatch = useDispatch();
  const { loader, savedBookmarks } = useSelector((state) => state.post);
  const { userDetails } = useSelector((state) => state.user);
  const [editModal, setEditModal] = useState(false);

  const handlePostDelete = () => {
    if (!loader) {
      dispatch(deletePost(postId, token));
      dispatch(fetchUserPosts(userId));
    }
  };

  const handleBookmarkClick = () => {
    if (savedBookmarks.includes(postId)) {
      dispatch(deleteBookmark(postId, token));
    } else {
      dispatch(addNewBookmark(postId, token));
    }
  };

  const handleLikeClick = () => {
    dispatch(likePostHandler(postId, userId, userDetails, token));
  };

  return (
    <Fragment>
      {editModal && (
        <EditPostModal
          setEditModal={setEditModal}
          postObject={post}
          postId={postId}
        />
      )}
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
            <button
              className='delete__btn'
              disabled={loader}
              onClick={() => setEditModal(true)}
            >
              <span className='bookmark'>
                <i className='tertiary fa-solid fa-pencil'></i>Edit
              </span>
            </button>
            <button
              className='delete__btn'
              disabled={loader}
              onClick={handlePostDelete}
            >
              <span className='bookmark'>
                <i className='tertiary fa-solid fa-trash'></i> Delete
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
              onClick={handleBookmarkClick}
            >
              <span className='bookmark'>
                <i
                  className={`tertiary ${
                    savedBookmarks.includes(postId)
                      ? 'fa-solid fa-bookmark'
                      : 'fa-regular fa-bookmark'
                  } `}
                ></i>
                {post?.bookmarked} Bookmark
              </span>
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
}
