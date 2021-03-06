import './authentication.css';
import { useState } from 'react';
import { useAuthCtx } from '../../context';
import { Link } from 'react-router-dom';
import { SIGNUP } from '../../routes';
import { loginCredentials } from '../../utility/constants';

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    email,
    password,
    emailError,
    passwordError,
    signinError,
    dispatch,
    handleSignIn
  } = useAuthCtx();

  const onSignInTestCredentials = (index) => {
    dispatch({ type: 'SIGNIN-EMAIL', payload: loginCredentials[index].email });
    dispatch({
      type: 'SIGNIN-PASSWORD',
      payload: loginCredentials[index].password
    });
    dispatch({
      type: 'SIGNUP-USERNAME',
      payload: loginCredentials[index].username
    });
    dispatch({
      type: 'AUTHENTICATION-ID',
      payload: loginCredentials[index].authenticationUserId
    });
  };

  const onSignInHandler = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  return (
    <div className='authentication__box'>
      {signinError && (
        <div className='card authentication'>
          <h1 className='alert tag cen md sb'>{signinError}</h1>
        </div>
      )}
      <div className='card authentication shdw'>
        <h1 className='lg sb cen xs-s mg-full'>SIGNIN</h1>
        <hr />
        <form action='#' className='sm-s'>
          <div className='authentication__input'>
            <label htmlFor='email__signin' className='label'>
              Enter Your Email ID
            </label>
            <input
              className='input sm-s'
              type='email'
              name='email__signin'
              id='email__signin'
              placeholder='Enter Email'
              autoComplete='off'
              value={email}
              onChange={(e) =>
                dispatch({ type: 'SIGNIN-EMAIL', payload: e.target.value })
              }
              onFocus={() => dispatch({ type: 'CLEAR-ALL-ERRORS' })}
              required
            />
            <h1 className='input__error'>{emailError}</h1>
          </div>
          <div className='authentication__input'>
            <label htmlFor='password__signin' className='label'>
              Enter Password
            </label>
            <div className='input__container'>
              <input
                className='input input__password sm-s'
                type={showPassword ? 'text' : 'password'}
                name='password__signin'
                id='password__signin'
                autoComplete='off'
                placeholder='Password'
                value={password}
                onChange={(e) =>
                  dispatch({ type: 'SIGNIN-PASSWORD', payload: e.target.value })
                }
                onFocus={() => dispatch({ type: 'CLEAR-ALL-ERRORS' })}
                required
              />
              <i
                className='fa-solid fa-eye input__eye'
                onClick={() => setShowPassword((e) => !e)}
              ></i>
            </div>

            <h1 className='input__error'>{passwordError}</h1>
          </div>
          <button
            type='submit'
            className='btn btn--wide btn--auth--solid sb'
            onClick={onSignInHandler}
          >
            SIGNIN
          </button>
          {loginCredentials.map((elem, index) => {
            return (
              <button
                key={elem.authenticationUserId}
                type='button'
                className='btn btn--wide btn--auth sb'
                onClick={onSignInTestCredentials.bind(this, index)}
              >
                {elem.username}
              </button>
            );
          })}
        </form>
        <div className='signin__links'>
          <Link to={SIGNUP} className='forgot sm'>
            Forgot Password?
          </Link>
          <Link to={SIGNUP} className='forgot sm fl-rt'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
