import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './post.css';
import { posts } from '../../utility/constants';
import { useTheme } from '../../context';
import { NewPostModal, Sidebar } from '../../components';

export default function Post() {
  const { postId } = useParams();
  const { newPostModal, setNewPostModal } = useTheme();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const item = posts.find((item) => item._id === postId);
    setPost({ ...item });
  }, [postId]);

  return (
    <Fragment>
      {newPostModal && <NewPostModal setNewPostModal={setNewPostModal} />}
      <div className='main__grid'>
        <Sidebar />
        <div className='main'>
          <div className='aside-left'></div>
          <div className='aside-right'>
            <div className='aside'></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
