import './modal.css';

export function NewPostModal({ setNewPostModal }) {
  return (
    <div className='modal modal__open flex-ct-ct' wide='40'>
      <div
        className='modal__background'
        onClick={() => setNewPostModal(false)}
      ></div>
      <div className='modal__content'>
          <div></div>
      </div>
      <span className='modal__close' onClick={() => setNewPostModal(false)}>
        <i className='fas fa-times-circle'></i>
      </span>
    </div>
  );
}
