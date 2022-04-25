import { Fragment } from 'react';
import './homepage.css';
import { useSelector } from 'react-redux';
import { Empty } from '../../components/empty';
import SinglePost from './SinglePost';

export default function Posts({ posts, myProfile, userId }) {
  const { bookmarkLoader, likeLoader } = useSelector((state) => state.post);

  return (
    <Fragment>
      {posts?.length ? (
        <div
          className={`${
            (likeLoader || bookmarkLoader) && 'disablePointerEvents posts__ctr'
          }`}
        >
          {posts?.map((elem) => {
            return (
              <SinglePost
                key={elem._id}
                myProfile={myProfile}
                userId={elem.userId ?? userId}
                postId={elem._id}
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
