import { Fragment } from 'react';
import '../../App.css';
import { useTheme } from '../context';
import { NewPostModal, Sidebar } from '../components';
import Suggestions from '../pages/homepage/Suggestions';

export function PageTemplate({ children }) {
  const { newPostModal, setNewPostModal } = useTheme();
 
  return (
    <Fragment>
      {newPostModal && <NewPostModal setNewPostModal={setNewPostModal} />}
      <div className='main__grid'>
        <Sidebar />
        <div className='main'>
          <div className='aside-left'>
            {children.length ? children[0] : children}
          </div>
          {children[1] && (
            <div className='aside-right'>
              <div className='aside'>
                {children[1]}
                <Suggestions />
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
