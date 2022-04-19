import { Fragment, useState, useEffect } from 'react';
import './bookmark.css';
import { Loader } from '../../components';
import { PageTemplate, ScrollToTop } from '../../helper';
import Posts from '../homepage/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBookmarks } from '../../service';
import { useAuthCtx } from '../../context';

export default function Bookmark() {
  const [renderedPosts, setRenderedPosts] = useState([]);
  const { token } = useAuthCtx();
  const dispatch = useDispatch();
  const { loader, savedBookmark } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchAllBookmarks(token));
  }, [dispatch, token]);

  useEffect(() => {
    if (savedBookmark) {
      setRenderedPosts(savedBookmark);
    }
  }, [savedBookmark]);

  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        {loader ? <Loader /> : <Posts posts={renderedPosts} />}
      </PageTemplate>
    </Fragment>
  );
}
