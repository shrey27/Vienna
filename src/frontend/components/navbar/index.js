import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { HOMEPAGE } from '../../routes';
import logoDark from '../../assets/logo_dark.svg';
import logo from '../../assets/logo.svg';
import { useTheme } from '../../context';
import { useState, useEffect } from 'react';

export function Navbar() {
  const { theme, setNewPostModal, setSearch } = useTheme();
  const [searchValue, setSearchValue] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/explore') {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchValue.toLowerCase());
  };

  const handleSearchCancel = () => {
    if (searchValue) {
      setSearchValue('');
      setSearch('');
    }
  };

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
          {showSearch && (
            <div className={`search__ctr ${theme === 'dark' && 'darktheme'}`}>
              <i
                className={` ${
                  searchValue.length ? 'fa-solid fa-xmark' : 'fas fa-search'
                } search__btn ${theme === 'dark' && 'darktheme'}`}
                onClick={handleSearchCancel}
              ></i>
              <form onSubmit={handleSearch}>
                <input
                  type='text'
                  placeholder='Search'
                  className={`input search__input no--bdr ${
                    theme === 'dark' && 'darktheme'
                  }`}
                  id='user-name'
                  name='user-name'
                  autoComplete='off'
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </form>
            </div>
          )}
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
