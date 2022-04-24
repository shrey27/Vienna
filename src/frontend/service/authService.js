import axios from 'axios';
import { SIGN_IN, SIGN_UP } from '../routes';

const errorStatements = {
  signin: 'User Not Found. Either Sign-up or try again later',
  signup: 'Sign Up Failed! Use different credentials or Try again later!'
};

export const signUpApi = async (username, email, password) => {
  try {
    const response = await axios.post(SIGN_UP, {
      firstName: username.split(' ')[0],
      lastName: username.split(' ')[1],
      email,
      password
    });
    return response;
  } catch (err) {
    console.error('SIGNUP-ERROR', err);
    return {
      error: errorStatements.signup
    };
  }
};

export const signInApi = async (email, password) => {
  try {
    const response = await axios.post(SIGN_IN, {
      email,
      password
    });
    return response;
  } catch (err) {
    console.error('SIGNIN-ERROR', err);
    return {
      error: errorStatements.signin
    };
  }
};
