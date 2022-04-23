import { Fragment } from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
import { useAuthCtx, useTheme } from '../../context';
import {
  deletePost,
  fetchUserPosts,
  addNewBookmark,
  deleteBookmark,
  likePostHandler
} from '../../service';
import { useDispatch, useSelector } from 'react-redux';
import { Empty } from '../../components/empty';
import SinglePost from './SinglePost';

export default function Posts({ posts, myProfile }) {
  const { token } = useAuthCtx();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { bookmarkLoader, loader, savedPosts, likeLoader } = useSelector(
    (state) => state.post
  );

  return (
    <Fragment>
      {posts.length ? (
        <div
          className={`${
            (likeLoader || bookmarkLoader) && 'disablePointerEvents posts__ctr'
          }`}
        >
          {posts.map((elem) => {
            const {
              likes: { likeCount }
            } = elem;
            return (
              <SinglePost
                key={elem._id}
                myProfile={myProfile}
                userId={elem.userId}
                likeCount={likeCount}
                elem={elem}
              />
            );
          })}
        </div>
      ) : (
        <Empty />
      )}
    </Fragment>
  );
}
