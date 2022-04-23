import './settings.css';
import { Fragment, useEffect, useState } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import { SignoutModal } from '../../components/modal/SignoutModal';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthCtx } from '../../context';
import { editUserHandler } from '../../service';

const defaultValues = {
  username: '',
  email: '',
  bio: '',
  profilePic: null,
  file: null,
  portfolio: ''
};

function SettingsPage() {
  const { userDetails } = useSelector((state) => state.user);
  const [signoutModal, setSignoutModal] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [form, setForm] = useState({ ...defaultValues });
  const { token, authenticationId } = useAuthCtx();
  const dispatch = useDispatch();

  useEffect(() => {
    setForm({
      username: userDetails?.username,
      email: userDetails?.email,
      bio: userDetails?.bio,
      profilePic: userDetails?.profilePic,
      portfolio: userDetails?.portfolio
    });
  }, [userDetails]);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, profilePic: URL.createObjectURL(file), file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    dispatch(editUserHandler(form, token, authenticationId));
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm({ ...defaultValues });
    setDisabled(true);
  };
  return (
    <Fragment>
      {signoutModal && <SignoutModal setSignoutModal={setSignoutModal} />}
      <div className='post settings'>
        <h1 className='settings__heading'>EDIT PROFILE</h1>
        <hr />
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className='profile__picture'>
            <label htmlFor='ImageInput'>
              <img
                alt='imageInput'
                src={
                  form?.profilePic ??
                  'https://www.w3schools.com/w3images/avatar2.png'
                }
              />
              <input
                type='file'
                id='ImageInput'
                onChange={onFileChange}
                multiple
                accept='image/*'
                hidden
                disabled={disabled}
              />
              <i className='fa-solid fa-camera camera'></i>
            </label>
          </div>
          <div className='mg--full'>
            <label className='profile__label'>
              Name:
              <input
                type='text'
                className='input profile__input'
                value={form?.username || ''}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                disabled={disabled}
              />
            </label>
          </div>
          <div className='mg--full'>
            <label className='profile__label'>
              Email:
              <input
                type='text'
                className='input profile__input'
                value={form?.email || ''}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={disabled}
              />
            </label>
          </div>
          <div className='mg--full'>
            <label className='profile__label'>
              Bio:
              <textarea
                className='profile__textarea'
                value={form?.bio || ''}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                disabled={disabled}
              ></textarea>
            </label>
          </div>
          <div className='mg--full'>
            <label className='profile__label'>
              Portfolio:
              <input
                type='text'
                className='input profile__input'
                value={form?.portfolio || ''}
                onChange={(e) =>
                  setForm({ ...form, portfolio: e.target.value })
                }
                disabled={disabled}
              />
            </label>
          </div>

          {disabled ? (
            <button
              type='button'
              className='btn btn--auth--solid'
              onClick={() => setDisabled(false)}
            >
              EDIT-DETAILS
            </button>
          ) : (
            <>
              <button type='submit' className='btn btn--auth--solid'>
                SUBMIT
              </button>
              <button type='reset' className='btn btn--cancel'>
                CANCEL
              </button>
            </>
          )}
          <button
            type='button'
            className='btn btn--cancel--solid fl-rt'
            onClick={() => setSignoutModal(true)}
          >
            Logout
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default function Settings() {
  return (
    <Fragment>
      <ScrollToTop />
      <PageTemplate>
        <SettingsPage />
      </PageTemplate>
    </Fragment>
  );
}
