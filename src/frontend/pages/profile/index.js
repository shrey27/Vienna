import './profile.css';
import { Fragment, useState, useEffect } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import Posts from '../homepage/Posts';
import { posts } from '../../utility/constants';

function ProfilePage() {
  return (
    <div className='profile'>
      <section className='details'>
        <div className='details__image'></div>
        
      </section>
      <Posts posts={posts} />
    </div>
  );
}

export default function Profile() {
  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <ProfilePage />
      </PageTemplate>
    </Fragment>
  );
}
