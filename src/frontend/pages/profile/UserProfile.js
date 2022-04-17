import Posts from '../homepage/Posts';
import { posts } from '../../utility/constants';
import { SETTINGS } from '../../routes';

export default function UserProfile() {
  return (
    <div className='profile'>
      <section className='profile__box'>
        <div className='profile__image'>
          <img
            src='https://www.w3schools.com/w3images/avatar2.png'
            alt='profilePic'
          />
        </div>
        <div className='profile__details'>
          <div className='profile__heading'>
            <h1>John Doe</h1>
            <button to={SETTINGS} className='btn btn--auth--solid sb'>
              Follow
            </button>
          </div>
          <h2 className='profile__userId'>@johnDoes1234</h2>
          <div className='profile__posts'>
            <span>
              <strong>4</strong> Posts
            </span>
            <span>
              <strong>5</strong> Followers
            </span>
            <span>
              <strong>3</strong> Following
            </span>
          </div>
          <p className='profile__paragraph'>This is my bio</p>
          <h1 className='profile__link'>
            <a href='https://github.com/shrey27'>Portfolio Link</a>
          </h1>
        </div>
      </section>
      <Posts posts={posts} />
    </div>
  );
}
