import './landing.css';
import { Fragment } from 'react';
import pic from '../../assets/landing.jpg';
import { Link } from 'react-router-dom';
import { SIGNIN } from '../../routes';

export default function Landing() {
  return (
    <Fragment>
      <div className='landing'>
        <div className='banner__text'>
          <h1>Are you a travelling enthusiast?</h1>
          <h2>Share your experiences with our community of travellers</h2>
          <Link to={SIGNIN} className='landing__cta'>
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
