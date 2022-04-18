import './Empty.css';
import pic from '../../assets/no-posts-yet.png';

export function Empty({ statement }) {
  return (
    <div className='empty'>
      <img src={pic} className='empty__image' alt='empty' />
    </div>
  );
}
