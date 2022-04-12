import { Fragment } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { navlinks } from '../../utility/constants';

// const backgroundStyle = ({ isActive }) => {
//   return isActive ? `sidebar__options selected` : `sidebar__options`;
// };

export function Sidebar() {
  return (
    <Fragment>
      <div className='sidebar'>
        <div className='newpost isMobile'>
        <i class="fa-solid fa-circle-plus"></i>
          <span className='sidebar__options__span'>New Post</span>
        </div>
        {navlinks.map((elem) => {
          return (
            <NavLink
              to={elem?.path}
              key={elem.id}
              className={`sidebar__options ${elem.isMobile && 'isMobile'}`}
            >
              <i className={elem.class}></i>
              <span className='sidebar__options__span'>{elem.name}</span>
            </NavLink>
          );
        })}
      </div>
    </Fragment>
  );
}
