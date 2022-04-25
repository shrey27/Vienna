import { Response } from 'miragejs';
import { formatDate } from '../utils/authUtils';
const sign = require('jwt-encode');

/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, username, password}
 * 
 * 
 * {
    _id: 'U4',
    firstName: 'Carlos',
    lastName: '',
    email: 'carlos123@gmail.com',
    password: 'carlos123',
    username: 'Carlos',
    bio: '',
    portfolio: '',
    followers: [],
    following: [],
    notifications: [],
    posts: [
      {
        _id: 'P6'
      }
    ],
    userHandler: '@carlos123',
    profilePic: process.env.REACT_APP_CARLOS,
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
  
 * */

export const signupHandler = function (schema, request) {
  const { email, firstName, lastName, password } = JSON.parse(
    request.requestBody
  );
  try {
    // check if username already exists
    const foundUser = schema.users.findBy({ email: email });
    if (foundUser) {
      return new Response(
        422,
        {},
        {
          errors: ['Unprocessable Entity. email Already Exists.']
        }
      );
    }

    const users = this.db.users;
    const _id = 'U' + users.length;

    const newUser = {
      _id,
      firstName,
      lastName,
      email,
      password,
      username: firstName + ' ' + lastName,
      bio: '',
      portfolio: '',
      followers: [],
      following: [],
      notifications: [],
      posts: [],
      profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
      userHandler: `@${firstName + lastName + Math.trunc(Math.random() * 100)}`,
      createdAt: formatDate(),
      updatedAt: formatDate()
    };
    const createdUser = schema.users.create(newUser);
    const encodedToken = sign({ _id, email }, process.env.REACT_APP_JWT_SECRET);
    return new Response(201, {}, { createdUser, encodedToken });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error
      }
    );
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {username, password}
 * */

export const loginHandler = function (schema, request) {
  const { email, password } = JSON.parse(request.requestBody);
  try {
    const foundUser = schema.users.findBy({ email: email });
    if (!foundUser) {
      return new Response(
        404,
        {},
        {
          errors: [
            'The username you entered is not Registered. Not Found error'
          ]
        }
      );
    }
    if (password === foundUser.password) {
      const encodedToken = sign(
        { _id: foundUser._id, email },
        process.env.REACT_APP_JWT_SECRET
      );
      return new Response(200, {}, { foundUser, encodedToken });
    }
    return new Response(
      401,
      {},
      {
        errors: [
          'The credentials you entered are invalid. Unauthorized access error.'
        ]
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error
      }
    );
  }
};
