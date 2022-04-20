import { Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageTemplate, ScrollToTop, usePostId } from '../../helper';
import Post from './Post';
import { HOMEPAGE } from '../../routes';
import { Loader } from '../../components';
import { useSelector } from 'react-redux';

export default function IndividualPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = usePostId(postId);
  const { loader } = useSelector((state) => state.post);

  useEffect(() => {
    if (!post) {
      navigate(HOMEPAGE);
    }
  }, [post, navigate]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Fragment>
          <ScrollToTop />
          <PageTemplate>
            <Post post={post} />
          </PageTemplate>
        </Fragment>
      )}
    </>
  );
}
