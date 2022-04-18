import './explore.css';
import { Fragment, useState, useEffect } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import Posts from '../homepage/Posts';
import { useTheme } from '../../context';
import { useSelector } from 'react-redux';

export default function ExploreFeed() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const { search } = useTheme();
  const savedPosts = useSelector((state) => state.post.savedPosts);

  useEffect(() => {
    let tempList = [...savedPosts];
    if (search) {
      tempList = tempList.filter(
        (item) =>
          item.title.toLowerCase().includes(search) ||
          item.username.toLowerCase().includes(search) ||
          item.userId.toLowerCase().includes(search)
      );
    }
    setRenderedPosts(tempList);
  }, [search, savedPosts]);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <Posts posts={renderedPosts} />
      </PageTemplate>
    </Fragment>
  );
}
