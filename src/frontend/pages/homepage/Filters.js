import './homepage.css';
import { Fragment } from 'react';
import trending from '../../assets/trending.webp';
import sort from '../../assets/sort.webp';

export default function Filters({ filters, setFilters }) {
  return (
    <Fragment>
      <button
        className='aside__options'
        onClick={() =>
          setFilters({
            ...filters,
            sortByMostLiked: !filters.sortByMostLiked
          })
        }
      >
        <img src={trending} alt='icon' className='aside__option__image' />
        <span className='aside__options__span'>
          {filters.sortByMostLiked ? 'Show All Posts' : "What's new !"}
        </span>
      </button>
      <button
        className='aside__options'
        onClick={() => setFilters({ ...filters, sortBydate: true })}
      >
        <img src={sort} alt='icon' className='aside__option__image' />
        <span className='aside__options__span'>Latest Posts</span>
      </button>
    </Fragment>
  );
}
