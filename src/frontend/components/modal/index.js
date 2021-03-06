import { useState, useRef, useEffect } from 'react';
import './modal.css';
import { InputImages } from '../../utility/constants';
import Emojis from './Emojis';
import { useOutsideClick } from '../../helper';
import { addNewPost } from '../../service';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthCtx } from '../../context';
const defaultState = {
  title: '',
  description: '',
  banner: null,
  bannerFile: null
};

export function NewPostModal({ setNewPostModal }) {
  const emojiRef = useRef(null);
  const EmojiClickedOutside = useOutsideClick(emojiRef);
  const [showEmoji, setShowEmoji] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    banner: null,
    bannerFile: null
  });
  const { userDetails } = useSelector((state) => state.user);
  const { authenticatedUserId } = useAuthCtx();

  const dispatch = useDispatch();
  const { token } = useAuthCtx();

  useEffect(() => {
    if (EmojiClickedOutside) {
      setShowEmoji(false);
    }
  }, [EmojiClickedOutside]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    let base64File = await toBase64(file);
    setForm({
      ...form,
      banner: base64File,
      bannerFile: file
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.description) {
      dispatch(addNewPost(form, authenticatedUserId, token));
      setNewPostModal(false);
      setForm(defaultState);
    }
  };

  const handleImageRemove = () => {
    setForm({ ...form, banner: null });
  };

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
              src={userDetails?.profilePic}
              className='modal__pic'
              alt='profilePic'
            />
          </div>
          <div className='modal__input'>
            {form?.banner && (
              <div className='uploaded__image__ctr'>
                <i
                  className='fa-solid fa-circle-xmark cancelImage'
                  onClick={handleImageRemove}
                ></i>
                <img
                  src={form?.banner}
                  className='uploaded__banner'
                  alt='uploaded__banner'
                />
              </div>
            )}
            <form onSubmit={handleFormSubmit}>
              <input
                type='text'
                className='input post__input'
                placeholder='Title'
                value={form?.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <textarea
                className='input post__textarea'
                placeholder='Description'
                value={form?.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              ></textarea>
              <hr />
              <div className='modal__submit__ctr mg--full'>
                <section className='emojiCtr flex-ct-st'>
                  <label htmlFor='ImageInput'>
                    <img alt='imageInput' src={InputImages.image} />
                    <input
                      type='file'
                      id='ImageInput'
                      onChange={onFileChange}
                      multiple
                      accept='image/*'
                      hidden
                    />
                  </label>
                  <img
                    alt='emojiInput'
                    src={InputImages.emoji}
                    onClick={() => setShowEmoji(true)}
                  />
                  {showEmoji && (
                    <div ref={emojiRef}>
                      <Emojis setForm={setForm} />
                    </div>
                  )}
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
