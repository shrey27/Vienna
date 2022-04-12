import './homepage.css';
import { Sidebar } from '../../components';
import { posts } from '../../utility/constants';
/**
 * 
 * {
    _id: 'P1',
    username: 'Carlos',
    userId: '@carlos123',
    profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
    title: 'Lorem Ipsum',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    banner: '',
    likes: 3,
    comments: 3,
    bookmarked: false
  }
 */
export default function Homepage() {
  return (
    <div className='main__grid'>
      <Sidebar />
      <div className='main'>
        {posts.map((elem) => {
          return (
            <div key={elem._id} className='post'>
              <div className='post__header'>
                <img src={elem.profilePic} alt='banner' />
                <div>
                  <h1>{elem.username}</h1>
                  <h2>{elem.userId}</h2>
                </div>
              </div>
              <h1 className='post__title'>{elem.title}</h1>
              <p className='post__paragraph'>{elem.description}</p>
              <div className='post__cta'>
                <span>
                  <i
                    className={`${
                      elem.likes
                        ? 'fa-solid fa-heart liked'
                        : 'fa-regular fa-heart'
                    } `}
                  ></i>{' '}
                  {elem.likes > 0 ? elem.likes : ''}
                </span>
                <span>
                  <i className='fa-regular fa-comment'></i>{' '}
                  {elem.comments > 0 ? elem.comments : ''}
                </span>
                <span>
                  <i
                    className={`${
                      elem.bookmarked
                        ? 'fa-solid fa-bookmark'
                        : 'fa-regular fa-bookmark'
                    } `}
                  ></i>{' '}
                  {elem.bookmarked}
                </span>
                <span>
                  <i className='fa-solid fa-share-nodes'></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
