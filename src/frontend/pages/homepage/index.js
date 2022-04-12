import './homepage.css';
import { Sidebar } from '../../components';

export default function Homepage() {
  return (
    <div className='main__grid'>
      <Sidebar />
      <div className='main'></div>
    </div>
  );
}
