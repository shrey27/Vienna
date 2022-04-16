import './settings.css';
import { Fragment } from 'react';
import { ScrollToTop, PageTemplate } from '../../helper';

function SettingsPage() {
  const onFileChange = (e) => {
    // const file = e.target.files[0];
    // if (acceptedFileTypes.includes(file.type)) {
    //   setForm({ ...form, selectedFile: URL.createObjectURL(file) });
    //   // used in axios, for sending data to server
    //   // const formData = new FormData();
    //   // formData.append('myFile', file, file.name);
    // }
  };
  return (
    <div className='post settings'>
      <h1 className='settings__heading'>EDIT PROFILE</h1>
      <hr />
      <form>
        <label className='profile__picture' htmlFor='ImageInput'>
          <img
            alt='imageInput'
            src='https://www.w3schools.com/w3images/avatar2.png'
          />
          <input
            type='file'
            id='ImageInput'
            onChange={onFileChange}
            multiple
            accept='image/*'
            hidden
          />
        </label>
        <label className='profile__label'>
          Name: <input type='text' className='input profile__input' />
        </label>
        <label className='profile__label'>
          Email: <input type='text' className='input profile__input' />
        </label>
        <label className='profile__label'>
          Bio: <textarea className='textarea profile__textarea'></textarea>
        </label>
        <label className='profile__label'>
          Portfolio: <input type='text' className='input profile__input' />
        </label>
        <button>SUBMIT</button>
        <button>CANCEL</button>
      </form>
    </div>
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
