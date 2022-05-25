import './homepage.css';
import { Fragment, useEffect, useState } from 'react';
import { useAuthCtx, useTheme } from '../../context';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Suggestions() {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const { theme } = useTheme();
  const { allUsers, userDetails } = useSelector((state) => state.user);
  const findUser = (userId) => {
    return allUsers?.find((item) => item._id === userId);
  };
  const { authenticatedUserId } = useAuthCtx();

  useEffect(() => {
    const following = userDetails.following.map((item) => item._id);
    const allUsersList = allUsers.map((item) => item._id);

    let temp = [];
    allUsersList.forEach((item) => {
      if (!following.includes(item) && item !== authenticatedUserId) {
        temp.push(item);
      }
    });

    setSuggestedUsers(temp);
  }, [userDetails, allUsers, authenticatedUserId]);

  return (
    <Fragment>
      <div className='suggestions__ctr'>
        <h1 className='suggestion__header'>Suggestions for you</h1>
        <ul className='suggestions'>
          {suggestedUsers.map((elem) => {
            const user = findUser(elem);
            return (
              <li key={elem}>
                <Link
                  to={'/userprofile/' + elem}
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
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}
