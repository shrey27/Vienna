import { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from './Post';
import { PageTemplate, ScrollToTop } from '../../helper';

export default function IndividualPost() {
  const { postId } = useParams();
  const savedPosts = useSelector((state) => state.post.savedPosts);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const item = savedPosts?.find((item) => item._id === postId);
    setPost({ ...item });
  }, [postId, savedPosts]);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <Post post={post} />
      </PageTemplate>
    </Fragment>
  );
}
