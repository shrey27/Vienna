import './homepage.css';
import { Fragment } from 'react';
import { suggestions } from '../../utility/constants';
import { useTheme } from '../../context';

export default function Suggestions() {
  const { theme } = useTheme();
  return (
    <Fragment>
      <div className='suggestions__ctr'>
        <h1 className='suggestion__header'>Suggestions for you</h1>
        <ul className='suggestions'>
          {suggestions.map((elem) => {
            return (
              <li
                key={elem.id}
                className={`post__header suggestion ${
                  theme === 'dark' && 'darktheme'
                }`}
              >
                <img src={elem.profilePic} alt='profilePic' />
                <div>
                  <h1>{elem.name}</h1>
                  <h2>{elem.userId}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}
