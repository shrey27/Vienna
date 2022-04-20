import { Fragment, useState, useEffect } from 'react';
import './comment.css';
import { comments } from '../../utility/constants';
import { v4 as uuid } from 'uuid';
import deletePic from '../../assets/delete.png';
import replyPic from '../../assets/reply.png';

export function Comment() {
  const [commentList, setCommentList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [commentStatement, setCommentStatement] = useState('');
  const [replyStatement, setReplyStatement] = useState('');

  useEffect(() => {
    setCommentList([...comments]);
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // send logged user details
    setCommentList([
      {
        _id: uuid(),
        userId: '@carlJones1234',
        username: 'Carl Jones',
        comment: commentStatement,
        profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
        reply: []
      },
      ...commentList
    ]);
    setCommentStatement('');
  };

  const handleCommentDelete = (commentId) => {
    setCommentList(commentList.filter((item) => item._id !== commentId));
  };

  const handleReplySubmit = (e, commentId) => {
    e.preventDefault();
    // send logged user details
    setCommentList(
      commentList.map((item) =>
        item._id === commentId
          ? {
              ...item,
              reply: [
                {
                  _id: uuid(),
                  reply: replyStatement,
                  userId: '@carlJones1234',
                  username: 'Carl Jones',
                  profilePic: 'https://www.w3schools.com/w3images/avatar2.png'
                },
                ...item.reply
              ]
            }
          : item
      )
    );
    setReplyStatement('');
    setUserId(null);
  };

  const handleReplyDelete = (commentId, replyId) => {
    setCommentList(
      commentList.map((item) =>
        item._id === commentId
          ? { ...item, reply: item.reply.filter((r) => r._id !== replyId) }
          : item
      )
    );
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
            src='https://www.w3schools.com/howto/img_avatar.png'
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
          <button type='submit' className='btn btn--auth--solid'>
            Post
          </button>
        </form>
      </div>
      {/* comment box ends */}

      {/* Comments on that post */}
      {commentList.map((elem) => {
        const { _id: commentId } = elem;
        return (
          <div className='post comments' key={elem._id}>
            <div className='post__box'>
              <img
                src={elem.profilePic}
                className='post__image'
                alt='profilePic'
              />
            </div>
            <div className='post__details'>
              <div className='post__details__header'>
                <div>
                  <h1>{elem.username}</h1>
                  <h2>{elem.userId}</h2>
                </div>
                <div>
                  <button
                    className='comment__btn'
                    onClick={() => setUserId(commentId)}
                  >
                    <i class='fa-solid fa-reply'></i>
                  </button>
                  <button
                    className='comment__btn'
                    onClick={handleCommentDelete.bind(this, commentId)}
                  >
                    <i class='fa-solid fa-trash'></i>
                  </button>
                </div>
              </div>
              <h2 className='comment'>{elem.comment}</h2>
              {/* comment box ends */}

              {/* reply box for that comment */}
              {userId && userId === commentId && (
                <div className='reply__box'>
                  <div className='post__box'>
                    <img
                      src='https://www.w3schools.com/howto/img_avatar.png'
                      className='post__image'
                      alt='profilePic'
                    />
                  </div>
                  <form
                    className='post__comment'
                    onSubmit={(e) => handleReplySubmit(e, commentId)}
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
                      <i class='fa-regular fa-circle-check'></i>
                    </button>
                    <button type='reset' className='comment__btn reply'>
                      <i class='fa-solid fa-circle-xmark'></i>
                    </button>
                  </form>
                </div>
              )}
              {/* reply box ends */}

              {/* reply box for that comment */}
              {elem.reply.map((rep, index) => {
                const { _id: replyId } = rep;
                return (
                  <div className='reply__box' key={rep._id + index}>
                    <div className='post__box'>
                      <img
                        src={rep.profilePic}
                        className='post__image'
                        alt='profilePic'
                      />
                    </div>
                    <div className='post__details'>
                      <div className='post__details__header'>
                        <div className='flex-st-ct flex-vertical'>
                          <h1>{rep.username}</h1>
                          <h2>{rep.userId}</h2>
                        </div>
                        <button
                          className='comment__btn'
                          onClick={handleReplyDelete.bind(
                            this,
                            commentId,
                            replyId
                          )}
                        >
                          <i class='fa-solid fa-trash'></i>{' '}
                        </button>
                      </div>

                      <h2 className='comment'>{rep.reply}</h2>
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
