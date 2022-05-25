import './explore.css';
import { Fragment, useState, useEffect } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import Posts from '../homepage/Posts';
import { useAuthCtx, useTheme } from '../../context';
import { useSelector } from 'react-redux';
import { Loader } from '../../components';

export default function ExploreFeed() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const { search } = useTheme();
  const savedPosts = useSelector((state) => state.post.savedPosts);
  const { userFollowing } = useSelector((state) => state.user);
  const { authenticatedUserId } = useAuthCtx();

  useEffect(() => {
    let tempList = [...savedPosts];
    tempList = tempList
      .filter((item) => item.userId !== authenticatedUserId)
      .filter((item) => !userFollowing.some((e) => e._id === item.userId));

    if (search) {
      tempList = tempList.filter((item) =>
        item.title.toLowerCase().includes(search)
      );
    }
    setRenderedPosts(tempList);
  }, [search, savedPosts, userFollowing, authenticatedUserId]);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        {renderedPosts.length ? <Posts posts={renderedPosts} /> : <Loader />}
      </PageTemplate>
    </Fragment>
  );
}
