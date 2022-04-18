import { Fragment } from 'react/cjs/react.production.min';
import './homepage.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context';

export default function Posts({ posts }) {
  const { theme } = useTheme();
  return (
    <Fragment>
      {posts.map((elem) => {
        return (
          <div
            key={elem._id}
            className={`post ${theme === 'dark' && 'darktheme'}`}
          >
            <Link to={`/profile/${elem._id}`}>
              <div className='post__header'>
                <img src={elem.profilePic} alt='profilepic' />
                <div>
                  <h1>{elem.username}</h1>
                  <h2>{elem.userId}</h2>
                </div>
              </div>
            </Link>
            <Link to={`posts/${elem._id}`} className='text'>
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
            <div className='post__cta'>
              <span>
                <i
                  className={`
                      tertiary ${
                        elem.likes
                          ? 'fa-solid fa-heart liked'
                          : 'fa-regular fa-heart'
                      } `}
                ></i>{' '}
                {elem.likes > 0 ? elem.likes : ''}
              </span>
              <Link to={`/${elem._id}`} className='text'>
                <span>
                  <i className='tertiary fa-regular fa-comment'></i>{' '}
                  {elem.comments > 0 ? elem.comments : ''}
                </span>
              </Link>
              <span>
                <i
                  className={`tertiary ${
                    elem.bookmarked
                      ? 'fa-solid fa-bookmark'
                      : 'fa-regular fa-bookmark'
                  } `}
                ></i>{' '}
                {elem.bookmarked}
              </span>
              <span>
                <i className='tertiary fa-solid fa-share-nodes'></i>
              </span>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
