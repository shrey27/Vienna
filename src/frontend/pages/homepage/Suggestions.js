import './homepage.css';
import { Fragment } from 'react';
import { suggestions } from '../../utility/constants';
import { useAuthCtx, useTheme } from '../../context';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Suggestions() {
  const { theme } = useTheme();
  const { allUsers } = useSelector((state) => state.user);
  const findUser = (userId) => {
    return allUsers?.find((item) => item._id === userId);
  };
  const { authenticatedUserId } = useAuthCtx();
  return (
    <Fragment>
      <div className='suggestions__ctr'>
        <h1 className='suggestion__header'>Suggestions for you</h1>
        <ul className='suggestions'>
          {suggestions.map((elem) => {
            const user = findUser(elem?._id);
            return (
              user?._id !== authenticatedUserId && (
                <li key={elem._id}>
                  <Link
                    to={'/userprofile/' + elem?._id}
                    className={`post__header suggestion ${
                      theme === 'dark' && 'darktheme'
                    }`}
                  >
                    <img src={user?.profilePic} alt='profilePic' />
                    <div>
                      <h1>{user?.username}</h1>
                      <h2>{user?.userHandler}</h2>
                    </div>
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}
