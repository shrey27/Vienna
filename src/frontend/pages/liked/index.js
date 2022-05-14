import './liked.css';
import { Fragment, useState, useEffect } from 'react';
import { Loader } from '../../components';
import { PageTemplate, ScrollToTop } from '../../helper';
import Posts from '../homepage/Posts';
import { useSelector } from 'react-redux';

export default function Liked() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const { bookmarkLoader, savedPosts, savedBookmarks } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      setRenderedPosts(
        savedPosts.filter((item) => item.likes.likedBy.includes(userData?._id))
      );
    }
  }, [savedBookmarks, savedPosts]);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        {bookmarkLoader ? <Loader /> : <Posts posts={renderedPosts} />}
      </PageTemplate>
    </Fragment>
  );
}
