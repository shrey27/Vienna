import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import './homepage.css';
import Filters from './Filters';
import Posts from './Posts';
import { PageTemplate, ScrollToTop } from '../../helper';
import { Loader } from '../../components';
import { useAuthCtx } from '../../context';

export default function Homepage() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const [filters, setFilters] = useState({
    sortBydate: false,
    sortByMostLiked: false
  });
  const { authenticatedUserId } = useAuthCtx();
  const { savedPosts, loader } = useSelector((state) => state.post);
  const { userFollowing } = useSelector((state) => state.user);

  useEffect(() => {
    if (savedPosts) {
      const { sortBydate, sortByMostLiked } = filters;
      let tempList = [...savedPosts];
      tempList = tempList
        .filter((item) => item.userId !== authenticatedUserId)
        .filter((item) => userFollowing.some((e) => e._id === item.userId));
      if (sortBydate) {
        tempList = tempList.sort((a, b) => b.dateOfCreation - a.dateOfCreation);
      }
      if (sortByMostLiked) {
        tempList = tempList.filter((e) => e.likes.likeCount > 0);
      }
      setRenderedPosts(tempList);
    }
  }, [authenticatedUserId, filters, savedPosts, userFollowing]);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        {loader ? <Loader /> : <Posts posts={renderedPosts} />}
        <Filters setFilters={setFilters} filters={filters} />
      </PageTemplate>
    </Fragment>
  );
}
