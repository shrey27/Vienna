import './Empty.css';
import pic from '../../assets/nofollowers.gif';

export function NoFollowers() {
  return (
    <div className='empty'>
      <img src={pic} className='empty__image' alt='empty' />
    </div>
  );
}
