import './explore.css';
import { Fragment, useState, useEffect } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import Posts from '../homepage/Posts';
import { randomPosts } from '../../utility/constants';
import { useTheme } from '../../context';

export default function ExploreFeed() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const { search } = useTheme();

  useEffect(() => {
    let tempList = [...randomPosts];
    if (search) {
      tempList = tempList.filter(
        (item) =>
          item.title.toLowerCase().includes(search) ||
          item.username.toLowerCase().includes(search) ||
          item.userId.toLowerCase().includes(search)
      );
    }
    setRenderedPosts(tempList);
  }, [search]);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <Posts posts={renderedPosts} />
      </PageTemplate>
    </Fragment>
  );
}
