import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    password: 'adarshBalika123',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: 'U0',
    firstName: 'Carl',
    lastName: 'Jones',
    email: 'carljones1234@gmail.com',
    password: 'carljones1234',
    username: 'Carl Jones',
    bio: '',
    portfolio: '',
    followers: [],
    following: [],
    posts: [
      {
        _id: uuid(),
        userId: 'U0',
        username: 'Carl Jones',
        userHandler: '@carljones12',
        profilePic: process.env.REACT_APP_CARL_JONES,
        title: 'Lorem Ipsum',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        banner:
          'https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: []
        },
        comments: [],
        bookmarked: false,
        dateOfCreation: 1646904044
      },
      {
        _id: uuid(),
        userId: 'U0',
        username: 'Carl Jones',
        userHandler: '@carljones12',
        profilePic: process.env.REACT_APP_CARL_JONES,
        title: 'Lorem Ipsum',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        banner:
          'https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: []
        },
        comments: [],
        bookmarked: false,
        dateOfCreation: 1646904044
      }
    ],
    userHandler: '@carljones12',
    pprofilePic: process.env.REACT_APP_CARL_JONES,
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
    followers: [],
    following: [],
    posts: [
      {
        _id: uuid(),
        userId: 'U1',
        username: 'Jane Doe',
        userHandler: '@janedoe234',
        profilePic: process.env.REACT_APP_JANE_DOE,
        title: 'Lorem Ipsum',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        banner:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1tSc7hh0Txu26SWEMftp4LwJRWSYFO0r4A&usqp=CAU',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: []
        },
        comments: [],
        bookmarked: false,
        dateOfCreation: 1649841644
      },
      {
        _id: uuid(),
        userId: 'U1',
        username: 'Jane Doe',
        userHandler: '@janedoe234',
        profilePic: process.env.REACT_APP_JANE_DOE,
        title: 'Lorem Ipsum',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: []
        },
        comments: [],
        bookmarked: false,
        dateOfCreation: 1649841644
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
    followers: [],
    following: [],
    posts: [
      {
        _id: uuid(),
        userId: 'U2',
        username: 'John Doe',
        userHandler: '@johndoe45',
        profilePic: process.env.REACT_APP_JOHN_DOE,
        title: 'Lorem Ipsum',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: []
        },
        comments: [],
        bookmarked: false,
        dateOfCreation: 1641806444
      },
      {
        _id: uuid(),
        userId: 'U2',
        username: 'John Doe',
        userHandler: '@johndoe45',
        profilePic: process.env.REACT_APP_JOHN_DOE,
        title: 'Lorem Ipsum',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: []
        },
        comments: [],
        bookmarked: false,
        dateOfCreation: 1641806444
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
    followers: [],
    following: [],
    posts: [
      {
        _id: uuid(),
        userId: 'U3',
        username: 'Carla Smith',
        userHandler: '@carla12',
        profilePic: process.env.REACT_APP_CARLA_SMITH,
        title: 'Lorem Ipsum',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        banner:
          'https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: []
        },
        comments: [],
        bookmarked: false,
        dateOfCreation: 1646904044
      },
      {
        _id: uuid(),
        userId: 'U3',
        username: 'Carla Smith',
        userHandler: '@carla12',
        profilePic: process.env.REACT_APP_CARLA_SMITH,
        title: 'Lorem Ipsum',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: []
        },
        comments: [],
        bookmarked: false,
        dateOfCreation: 1646904044
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
    posts: [
      {
        _id: uuid(),
        userId: 'U4',
        username: 'Carlos',
        userHandler: '@carlos123',
        profilePic: process.env.REACT_APP_CARLOS,
        title: 'Lorem Ipsum',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: []
        },
        comments: [],
        bookmarked: false,
        dateOfCreation: 1647076844
      }
    ],
    userHandler: '@carlos123',
    profilePic: process.env.REACT_APP_CARLOS,
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
];
