import './navbar.css';
import { Link } from 'react-router-dom';
import { HOMEPAGE } from '../../routes';
import logoDark from '../../assets/logo_dark.svg';
import logo from '../../assets/logo.svg';
import { useTheme } from '../../context';

export function Navbar() {
  const { theme, switchTheme, setNewPostModal } = useTheme();

  return (
    <div>
      <nav className='navbar xs-s border--btm'>
        <section className='begin'>
          <Link to={HOMEPAGE} className='start link__style'>
            <img
              src={theme === 'dark' ? logo : logoDark}
              className='header__nav__image'
              alt='logo'
            />
          </Link>
        </section>
        <section className='middle'>
          <div className={`search__ctr ${theme === 'dark' && 'darktheme'}`}>
            <i
              className={`fas fa-search search__btn ${
                theme === 'dark' && 'darktheme'
              }`}
            ></i>
            <form>
              <input
                type='text'
                placeholder='Search'
                className={`input search__input no--bdr ${
                  theme === 'dark' && 'darktheme'
                }`}
                id='user-name'
                name='user-name'
                autoComplete='off'
              />
            </form>
          </div>
        </section>
        <section className='end'>
          <button
            className='btn btn--auth--solid'
            onClick={() => setNewPostModal(true)}
          >
            <i className='fa-solid fa-square-plus'></i>{' '}
            <span className='btn__span'>New Post</span>
          </button>
          {/* <button className='btn btn--auth--solid' onClick={switchTheme}>
            <i
              className={`fa-solid ${
                theme === 'dark' ? 'fa-sun darktheme' : 'fa-moon '
              }`}
            ></i>
          </button> */}
        </section>
      </nav>
    </div>
  );
}
