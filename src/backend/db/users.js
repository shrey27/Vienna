import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 'U0',
    firstName: 'Carl',
    lastName: 'Jones',
    email: 'carljones1234@gmail.com',
    password: 'carljones1234',
    username: 'Carl Jones',
    bio: 'My name is Carl Jones. I am an aspiring web-developer',
    portfolio: 'https://github.com/shrey27',
    notifications: [
      {
        _id: uuid(),
        liked: false,
        followed: true,
        comment: '',
        postId: null,
        username: 'Jane Doe',
        userId: 'U1',
        profilePic: process.env.REACT_APP_JANE_DOE,
        unseen: true
      },
      {
        _id: uuid(),
        liked: true,
        followed: false,
        comment: '',
        postId: null,
        username: 'Jane Doe',
        userId: 'U1',
        profilePic: process.env.REACT_APP_JANE_DOE
      }
    ],
    followers: [
      {
        _id: 'U1',
        username: 'Jane Doe'
      }
    ],
    following: [
      {
        _id: 'U1',
        username: 'Jane Doe'
      },
      {
        _id: 'U2',
        username: 'John Doe'
      }
    ],
    posts: [
      {
        _id: 'P4'
      },
      {
        _id: 'P5'
      }
    ],
    userHandler: '@carljones12',
    profilePic: process.env.REACT_APP_CARL_JONES,
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: 'U1',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe12@gmail.com',
    password: 'janedoe12',
    username: 'Jane Doe',
    bio: '',
    portfolio: '',
    notifications: [],
    followers: [
      {
        _id: 'U0',
        username: 'Carl Jones'
      }
    ],
    following: [
      {
        _id: 'U0',
        username: 'Carl Jones'
      }
    ],
    posts: [
      {
        _id: 'P1'
      },
      {
        _id: 'P7'
      }
    ],
    userHandler: '@janedoe234',
    profilePic: process.env.REACT_APP_JANE_DOE,
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: 'U2',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe87@gmail.com',
    password: 'janedoe12',
    username: 'John Doe',
    bio: '',
    portfolio: '',
    notifications: [],
    followers: [
      {
        _id: 'U0',
        username: 'Carl Jones'
      }
    ],
    following: [],
    posts: [
      {
        _id: 'P2'
      },
      {
        _id: 'P8'
      }
    ],
    userHandler: '@johndoe45',
    profilePic: process.env.REACT_APP_JOHN_DOE,
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: 'U3',
    firstName: 'Carla',
    lastName: 'Smith',
    email: 'carlasmith27@gmail.com',
    password: 'carlasmith27',
    username: 'Carla Smith',
    bio: '',
    portfolio: '',
    notifications: [],
    followers: [],
    following: [],
    posts: [
      {
        _id: 'P3'
      },
      {
        _id: 'P9'
      }
    ],
    userHandler: '@carla12',
    profilePic: process.env.REACT_APP_CARLA_SMITH,
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
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
];
