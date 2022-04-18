import { Fragment, useState, useEffect } from 'react';
import './bookmark.css';
import { PageTemplate, ScrollToTop } from '../../helper';
import Posts from '../homepage/Posts';
import { useSelector } from 'react-redux';

export default function Bookmark() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const savedPosts = useSelector((state) => state.post.savedPosts);

  useEffect(() => {
    const tempList = savedPosts.filter((e) => e.bookmarked);
    setRenderedPosts(tempList);
  }, [savedPosts]);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <Posts posts={renderedPosts} />
      </PageTemplate>
    </Fragment>
  );
}
