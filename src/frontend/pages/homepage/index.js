import { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPosts } from '../../service/postActions';
import './homepage.css';
import Filters from './Filters';
import Posts from './Posts';
import { PageTemplate, ScrollToTop } from '../../helper';

export default function Homepage() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const [filters, setFilters] = useState({
    sortBydate: false,
    sortByMostLiked: false
  });

  const dispatch = useDispatch();
  const savedPosts = useSelector((state) => state.post.savedPosts);
  console.log(savedPosts);
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  useEffect(() => {
    if (savedPosts) {
      const { sortBydate, sortByMostLiked } = filters;
      let tempList = [...savedPosts];
      if (sortBydate) {
        tempList = tempList.sort((a, b) => b.dateOfCreation - a.dateOfCreation);
      }
      if (sortByMostLiked) {
        tempList = tempList.filter((e) => e.likes > 5);
      }
      setRenderedPosts(tempList);
    }
  }, [filters, savedPosts]);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <Posts posts={renderedPosts} />
        <Filters setFilters={setFilters} filters={filters} />
      </PageTemplate>
    </Fragment>
  );
}
