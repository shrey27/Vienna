import './modal.css';
import { InputImages } from '../../utility/constants';

export function NewPostModal({ setNewPostModal }) {
  return (
    <div className='modal modal__open flex-ct-ct'>
      <div
        className='modal__background'
        onClick={() => setNewPostModal(false)}
      ></div>
      <div className='modal__content sm-s'>
        <h1 className='lg cen xs-s mg--half'>NEW POST</h1>
        <hr />
        <div className='flex-ct-ct mg--half'>
          <div className='modal__pic__ctr'>
            <img
              src='https://www.w3schools.com/howto/img_avatar.png'
              className='modal__pic'
              alt='profilePic'
            />
          </div>
          <div className='modal__input'>
            <form>
              <input
                type='text'
                className='input post__input'
                placeholder='Title'
              />
              <textarea
                className='input post__textarea'
                placeholder='Description'
              ></textarea>
              <hr />
              <div className='modal__submit__ctr mg--full'>
                <section className='flex-ct-st'>
                  <img alt='imageInput' src={InputImages.image} />
                  <img alt='emojiInput' src={InputImages.emoji} />
                </section>
                <button type='submit' className='btn btn--auth--solid sb'>
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <span className='modal__close' onClick={() => setNewPostModal(false)}>
        <i className='fas fa-times-circle'></i>
      </span>
    </div>
  );
}
