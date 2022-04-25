import { createContext, useContext, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOMEPAGE, LANDING } from '../routes';
import { signUpApi, signInApi } from '../service';
import {
  defaultState,
  authReducerFunc,
  validationForSignIn,
  validationForSignUp
} from '../helper';
import { ToastMessage } from '../components';

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducerFunc, defaultState);
  const { email, password, username, signupEmail, signupPassword } = state;
  const navigate = useNavigate();

  const handleSignIn = async (navigateTo) => {
    if (validationForSignIn(state, dispatch)) {
      const response = await signInApi(email, password);
      if (response.data) {
        const { foundUser, encodedToken } = response.data;
        localStorage.setItem('token', encodedToken);
        localStorage.setItem('userData', JSON.stringify(foundUser));
        dispatch({ type: 'TOKEN-SAVED', payload: encodedToken });
        dispatch({
          type: 'AUTHENTICATION-ID',
          payload: foundUser._id
        });
        navigate(navigateTo ?? HOMEPAGE, { replace: true });
      } else {
        dispatch({
          type: 'SIGNIN-ERROR',
          payload: response.error
        });
        ToastMessage('Sign In failed', 'error');
      }
    }
  };

  const handleSignUp = async () => {
    if (validationForSignUp(state, dispatch)) {
      const response = await signUpApi(username, signupEmail, signupPassword);
      if (response.data) {
        const { createdUser, encodedToken } = response.data;
        localStorage.setItem('token', encodedToken);
        localStorage.setItem('userData', JSON.stringify(createdUser));
        dispatch({ type: 'TOKEN-SAVED', payload: encodedToken });
        dispatch({
          type: 'SIGNIN-EMAIL',
          payload: createdUser.email
        });
        dispatch({
          type: 'SIGNIN-PASSWORD',
          payload: createdUser.password
        });
        dispatch({
          type: 'AUTHENTICATION-ID',
          payload: createdUser._id
        });
        ToastMessage('Sign Up successful', 'success');
        navigate(LANDING);
      } else {
        dispatch({ type: 'CLEAR-FIELDS' });
        dispatch({ type: 'SIGNUP-ERROR', payload: response.error });
        ToastMessage('Change Email Id or try again later!', 'error');
      }
    }
  };

  const handleSignOut = () => {
    dispatch({ type: 'TOKEN-REMOVED' });
    dispatch({ type: 'CLEAR-FIELDS' });
    localStorage.clear();
    navigate(LANDING);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      dispatch({ type: 'TOKEN-SAVED', payload: localStorage.getItem('token') });
      const data = JSON.parse(storedData);
      dispatch({
        type: 'SIGNUP-USERNAME',
        payload: `${data.firstName} ${data.lastName}`
      });
      dispatch({
        type: 'AUTHENTICATION-ID',
        payload: data._id
      });
    }
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        ...state,
        dispatch,
        handleSignIn,
        handleSignUp,
        handleSignOut
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthCtx = () => useContext(AuthenticationContext);

export { useAuthCtx, AuthenticationProvider };
