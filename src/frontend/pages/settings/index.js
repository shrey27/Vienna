import './settings.css';
import { Fragment, useState } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';
import { SignoutModal } from '../../components/modal/SignoutModal';
const defaultValues = {
  name: '',
  email: '',
  bio: '',
  profilePic: null,
  url: ''
};
function SettingsPage() {
  const [signoutModal, setSignoutModal] = useState(false);
  const [form, setForm] = useState({ ...defaultValues });
  const onFileChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, profilePic: URL.createObjectURL(file) });
    // used in axios, for sending data to server
    // const formData = new FormData();
    // formData.append('myFile', file, file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Edit Form', form);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm({ ...defaultValues });
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
                value={form?.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
          </div>
          <div className='mg--full'>
            <label className='profile__label'>
              Email:{' '}
              <input
                type='text'
                className='input profile__input'
                value={form?.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
          </div>
          <div className='mg--full'>
            <label className='profile__label'>
              Bio:{' '}
              <textarea
                className='profile__textarea'
                value={form?.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
              ></textarea>
            </label>
          </div>
          <div className='mg--full'>
            <label className='profile__label'>
              Portfolio:{' '}
              <input
                type='text'
                className='input profile__input'
                value={form?.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
              />
            </label>
          </div>
          <button type='submit' className='btn btn--auth--solid'>
            SUBMIT
          </button>
          <button type='reset' className='btn btn--cancel'>
            CANCEL
          </button>
          <button
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
