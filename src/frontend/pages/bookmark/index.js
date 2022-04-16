import { Fragment, useState, useEffect } from 'react';
import './bookmark.css';
import { PageTemplate, ScrollToTop } from '../../helper';
import Posts from '../homepage/Posts';
import { posts as savedPosts } from '../../utility/constants';

export default function Bookmark() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  useEffect(() => {
    setRenderedPosts(savedPosts.filter((e) => e.bookmarked));
  }, []);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <Posts posts={renderedPosts} />
      </PageTemplate>
    </Fragment>
  );
}
