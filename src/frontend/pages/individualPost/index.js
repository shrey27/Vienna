import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../homepage/post.css';
import { posts } from '../../utility/constants';
import Post from './Post';
import PageTemplate from '../../helper/PageTemplate';

export default function IndividualPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const item = posts.find((item) => item._id === postId);
    setPost({ ...item });
  }, [postId]);

  return (
    <Fragment>
      <PageTemplate>
        <Post post={post} />
      </PageTemplate>
    </Fragment>
  );
}
