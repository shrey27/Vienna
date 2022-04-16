import { useState, useEffect, Fragment } from 'react';
import './homepage.css';
import { posts as savedPosts } from '../../utility/constants';
import Filters from './Filters';
import Posts from './Posts';
import { PageTemplate, ScrollToTop } from '../../helper';

export default function Homepage() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const [filters, setFilters] = useState({
    sortBydate: false,
    sortByMostLiked: false
  });

  useEffect(() => {
    const { sortBydate, sortByMostLiked } = filters;
    let tempList = [...savedPosts];
    if (sortBydate) {
      tempList = tempList.sort((a, b) => b.dateOfCreation - a.dateOfCreation);
    }
    if (sortByMostLiked) {
      tempList = tempList.filter((e) => e.likes > 5);
    }
    setRenderedPosts(tempList);
  }, [filters]);

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
