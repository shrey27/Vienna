import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import './homepage.css';
import Filters from './Filters';
import Posts from './Posts';
import { PageTemplate, ScrollToTop } from '../../helper';
import { Loader } from '../../components';

export default function Homepage() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const [filters, setFilters] = useState({
    sortBydate: false,
    sortByMostLiked: false
  });
  const { savedPosts, loader } = useSelector((state) => state.post);
  
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
        {loader ? <Loader /> : <Posts posts={renderedPosts} />}
        <Filters setFilters={setFilters} filters={filters} />
      </PageTemplate>
    </Fragment>
  );
}
