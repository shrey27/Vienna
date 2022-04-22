import { Fragment, useState, useEffect } from 'react';
import './comment.css';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { commentPostHandler, deleteCommentHandler } from '../../service';
import { useAuthCtx } from '../../context';
import { usePostId } from '../../helper';

export function Comment({ postId }) {
  const post = usePostId(postId);
  const [commentList, setCommentList] = useState([]);
  const [userId, setUserId] = useState(null);
  const { token } = useAuthCtx();
  const [commentStatement, setCommentStatement] = useState('');
  const [replyStatement, setReplyStatement] = useState('');
  const { savedPosts } = useSelector((state) => state.post);
  const { userDetails } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setCommentList(
      savedPosts.length
        ? savedPosts.find((item) => item._id === postId).comments
        : []
    );
  }, [postId, savedPosts]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentObject = {
      _id: uuid(),
      userId: userDetails?.userId,
      username: userDetails?.username,
      comment: commentStatement,
      profilePic: userDetails?.profilePic,
      reply: []
    };
    dispatch(
      commentPostHandler(
        postId,
        commentObject,
        post?.userId,
        userDetails,
        token
      )
    );
    setCommentStatement('');
  };

  const handleCommentDelete = (commentId) => {
    dispatch(deleteCommentHandler(postId, commentId, token));
  };

  const handleReplySubmit = (e, commentId) => {
    e.preventDefault();
    // send logged user details
    const temp = commentList.find((item) => item._id === commentId);
    const commentObject = {
      ...temp,
      reply: [
        {
          _id: uuid(),
          reply: replyStatement,
          userId: userDetails?.userId,
          username: userDetails?.username,
          profilePic: userDetails?.profilePic
        },
        ...temp.reply
      ]
    };
    dispatch(
      commentPostHandler(
        postId,
        commentObject,
        post?.userId,
        userDetails,
        token
      )
    );
    setReplyStatement('');
    setUserId(null);
  };

  const handleReplyDelete = (commentId, replyId) => {
    const temp = commentList.find((item) => item._id === commentId);
    const commentObject = {
      ...temp,
      reply: temp.reply.filter((item) => item._id !== replyId)
    };
    dispatch(commentPostHandler(postId, commentObject, token));
  };

  const handleReset = (e) => {
    e.preventDefault();
    setReplyStatement('');
    setUserId(null);
  };

  return (
    <Fragment>
      {/* Comment box for any user */}
      <div className='post comment__box'>
        <div className='post__box'>
          <img
            src={userDetails?.profilePic}
            className='post__image'
            alt='profilePic'
          />
        </div>
        <form className='post__comment' onSubmit={handleCommentSubmit}>
          <input
            type='text'
            className='input'
            placeholder='Leave a comment'
            autoComplete='off'
            value={commentStatement}
            onChange={(e) => setCommentStatement(e.target.value)}
          />
          <button
            type='submit'
            className='btn btn--auth--solid'
            disabled={!commentStatement}
          >
            Post
          </button>
        </form>
      </div>
      {/* comment box ends */}

      {/* Comments on that post */}
      {commentList.map((elem) => {
        return (
          <div className='post comments' key={elem?._id}>
            <div className='post__box'>
              <img
                src={elem?.profilePic}
                className='post__image'
                alt='profilePic'
              />
            </div>
            <div className='post__details'>
              <div className='post__details__header'>
                <div>
                  <h1>{elem?.username}</h1>
                  <h2>{elem?.userId}</h2>
                </div>
                <div>
                  <button
                    className='comment__btn'
                    onClick={() => setUserId(elem?._id)}
                  >
                    <i className='fa-solid fa-reply'></i>
                  </button>
                  <button
                    className='comment__btn'
                    onClick={handleCommentDelete.bind(this, elem?._id)}
                  >
                    <i className='fa-solid fa-trash'></i>
                  </button>
                </div>
              </div>
              <h2 className='comment'>{elem?.comment}</h2>
              {/* comment box ends */}

              {/* reply box for that comment */}
              {userId && userId === elem?._id && (
                <div className='reply__box'>
                  <div className='post__box'>
                    <img
                      src={userDetails?.profilePic}
                      className='post__image'
                      alt='profilePic'
                    />
                  </div>
                  <form
                    className='post__comment'
                    onSubmit={(e) => handleReplySubmit(e, elem?._id)}
                    onReset={handleReset}
                  >
                    <input
                      type='text'
                      className='input'
                      placeholder='Leave a reply'
                      autoComplete='off'
                      value={replyStatement}
                      onChange={(e) => setReplyStatement(e.target.value)}
                    />
                    <button type='submit' className='comment__btn reply'>
                      <i className='fa-regular fa-circle-check'></i>
                    </button>
                    <button type='reset' className='comment__btn reply'>
                      <i className='fa-solid fa-circle-xmark'></i>
                    </button>
                  </form>
                </div>
              )}
              {/* reply box ends */}

              {/* reply box for that comment */}
              {elem?.reply?.map((rep, index) => {
                return (
                  <div className='reply__box' key={rep._id + index}>
                    <div className='post__box'>
                      <img
                        src={rep?.profilePic}
                        className='post__image'
                        alt='profilePic'
                      />
                    </div>
                    <div className='post__details'>
                      <div className='post__details__header'>
                        <div className='flex-st-ct flex-vertical'>
                          <h1>{rep?.username}</h1>
                          <h2>{rep?.userId}</h2>
                        </div>
                        <button
                          className='comment__btn'
                          onClick={handleReplyDelete.bind(
                            this,
                            elem?._id,
                            rep?._id
                          )}
                        >
                          <i className='fa-solid fa-trash'></i>{' '}
                        </button>
                      </div>

                      <h2 className='comment'>{rep?.reply}</h2>
                    </div>
                  </div>
                );
              })}
              {/* reply box ends */}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
