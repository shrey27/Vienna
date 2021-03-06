import { Fragment, useState, useEffect } from 'react';
import './bookmark.css';
import { Loader } from '../../components';
import { PageTemplate, ScrollToTop } from '../../helper';
import Posts from '../homepage/Posts';
import { useSelector } from 'react-redux';

export default function Bookmark() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const { bookmarkLoader, savedPosts, savedBookmarks } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    setRenderedPosts(
      savedPosts.filter((item) => savedBookmarks.includes(item._id))
    );
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
