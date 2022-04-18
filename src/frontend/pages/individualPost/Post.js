import { Fragment } from 'react';
import { useTheme } from '../../context';
import { Comment } from './Comments';
import { Link } from 'react-router-dom';
import './post.css';

export default function Post({ post }) {
  const { theme } = useTheme();
  console.log(post)
  return (
    <Fragment>
      <div className={`post ${theme === 'dark' && 'darktheme'}`}>
        <Link to={`/profile/${post?.username.replace(/\s/g, '')}`}>
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
          <span>
            <i
              className={`
                            tertiary ${
                              post?.likes
                                ? 'fa-solid fa-heart liked'
                                : 'fa-regular fa-heart'
                            } `}
            ></i>{' '}
            {post?.likes > 0 ? post?.likes : ''}
          </span>
          <span>
            <i className='tertiary fa-regular fa-comment'></i>{' '}
            {post?.comments > 0 ? post?.comments : ''}
          </span>
          <span>
            <i
              className={`tertiary ${
                post?.bookmarked
                  ? 'fa-solid fa-bookmark'
                  : 'fa-regular fa-bookmark'
              } `}
            ></i>{' '}
            {post?.bookmarked}
          </span>
          <span>
            <i className='tertiary fa-solid fa-share-nodes'></i>
          </span>
        </div>
      </div>
      <Comment />
    </Fragment>
  );
}
