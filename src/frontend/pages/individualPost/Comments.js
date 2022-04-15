import { Fragment } from 'react';
import './comment.css';
import { comments } from '../../utility/constants';

export function Comment() {
  return (
    <Fragment>
      <div className='post comment__box'>
        <div className='post__box'>
          <img
            src='https://www.w3schools.com/howto/img_avatar.png'
            className='post__image'
            alt='profilePic'
          />
        </div>
        <form className='post__comment'>
          <input
            type='text'
            className='input'
            placeholder='Leave a comment'
            autoComplete='off'
          />
          <button type='submit' className='btn btn--auth--solid'>
            Post
          </button>
        </form>
      </div>
      {comments.map((elem) => {
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
              <h1>{elem.username}</h1>
              <h2>{elem.userId}</h2>
              <h2 className='comment'>{elem.comment}</h2>
              <div>
                <button className='comment__btn'>Reply</button>
                <button className='comment__btn delete'>Delete</button>
              </div>
              {elem.reply.map((rep, index) => {
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
                      <h1>{rep.username}</h1>
                      <h2>{rep.userId}</h2>
                      <h2 className='comment'>{rep.reply}</h2>
                      <button className='comment__btn delete'>Delete</button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <form className='post__comment'>
              <input
                type='text'
                className='input'
                placeholder='Leave a comment'
                autoComplete='off'
              />
              <button type='submit' className='btn btn--auth--solid'>
                Post
              </button>
            </form> */}
          </div>
        );
      })}
    </Fragment>
  );
}
