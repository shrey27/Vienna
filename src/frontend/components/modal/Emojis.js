import './modal.css';
import { emojis } from '../../utility/constants';
export default function Emojis({ setForm }) {
  return (
    <div className='emoji_box'>
      {emojis.map((elem, index) => {
        return (
          <button
            key={index * 2}
            className='emoji'
            onClick={() =>
              setForm((e) => ({ ...e, description: e.description + elem }))
            }
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
}
