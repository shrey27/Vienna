import './navbar.css';
import { Link } from 'react-router-dom';
import { HOMEPAGE } from '../../routes';
import pic from '../../assets/logo_dark.svg';

export function Navbar() {
  return (
    <div>
      <nav className='navbar xs-s border--btm'>
        <section className='begin'>
          <Link to={HOMEPAGE} className='start link__style'>
            <img src={pic} className='header__nav__image' alt='logo' />
          </Link>
        </section>
        <section className='middle'>
          <div className='search__ctr'>
            <i className='fas fa-search search__btn'></i>
            <form>
              <input
                type='text'
                placeholder='Search'
                className='input search__input no--bdr'
                id='user-name'
                name='user-name'
                autoComplete='off'
              />
            </form>
          </div>
        </section>
        <section className='end'>
          <i className='fa-solid fa-sun menu__icon darkTheme'></i>
          <i className='fa-solid fa-moon menu__icon darkTheme'></i>
        </section>
      </nav>
    </div>
  );
}
