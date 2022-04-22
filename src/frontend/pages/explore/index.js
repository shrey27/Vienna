import './explore.css';
import { Fragment, useState, useEffect } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import Posts from '../homepage/Posts';
import { useAuthCtx, useTheme } from '../../context';
import { useSelector } from 'react-redux';

export default function ExploreFeed() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const { search } = useTheme();
  const { username } = useAuthCtx();
  const savedPosts = useSelector((state) => state.post.savedPosts);
  const { userFollowing } = useSelector((state) => state.user);

  useEffect(() => {
    let tempList = [...savedPosts];
    tempList = tempList
      .filter((item) => item.username !== username)
      .filter(
        (item) => !userFollowing.some((e) => e.username === item.username)
      );
    if (search) {
      tempList = tempList.filter(
        (item) =>
          item.title.toLowerCase().includes(search) ||
          item.username.toLowerCase().includes(search) ||
          item.userId.toLowerCase().includes(search)
      );
    }
    setRenderedPosts(tempList);
  }, [search, savedPosts, username, userFollowing]);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <Posts posts={renderedPosts} />
      </PageTemplate>
    </Fragment>
  );
}
