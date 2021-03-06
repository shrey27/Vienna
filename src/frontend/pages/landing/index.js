import './landing.css';
import { Fragment, useEffect } from 'react';
import pic from '../../assets/landing.jpg';
import { Link } from 'react-router-dom';
import { HOMEPAGE } from '../../routes';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from '../../service';

export default function Landing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
  return (
    <Fragment>
      <div className='landing'>
        <div className='banner__text'>
          <h1>Are you a travelling enthusiast?</h1>
          <h2>Share your experiences with our community of travellers</h2>
          <Link to={HOMEPAGE} className='landing__cta'>
            Get Started
          </Link>
        </div>
        <div className='banner__box'>
          <img src={pic} className='banner' alt='landing banner' />
        </div>
      </div>
    </Fragment>
  );
}
