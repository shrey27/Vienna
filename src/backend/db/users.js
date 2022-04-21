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
    _id: uuid(),
    firstName: 'Carl',
    lastName: 'Jones',
    email: 'carljones1234@gmail.com',
    password: 'carljones1234',
    username: 'Carl Jones',
    followers: [],
    following: [],
    posts: [
      {
        _id: uuid(),
        username: 'Carl Jones',
        userId: '@carljones12',
        profilePic: 'https://www.w3schools.com/howto/img_avatar2.png',
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
        username: 'Carl Jones',
        userId: '@carljones12',
        profilePic: 'https://www.w3schools.com/howto/img_avatar2.png',
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
    userId: '@carljones12',
    profilePic: 'https://www.w3schools.com/howto/img_avatar2.png',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe12@gmail.com',
    password: 'janedoe12',
    username: 'Jane Doe',
    followers: [],
    following: [],
    posts: [
      {
        _id: uuid(),
        username: 'Jane Doe',
        userId: '@janedoe234',
        profilePic: 'https://www.w3schools.com/w3images/avatar5.png',
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
        username: 'Jane Doe',
        userId: '@janedoe234',
        profilePic: 'https://www.w3schools.com/w3images/avatar5.png',
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
    userId: '@janedoe234',
    profilePic: 'https://www.w3schools.com/w3images/avatar5.png',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe87@gmail.com',
    password: 'janedoe12',
    username: 'Jane Doe',
    followers: [],
    following: [],
    posts: [
      {
        _id: uuid(),
        username: 'John Doe',
        userId: '@johndoe45',
        profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
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
        username: 'John Doe',
        userId: '@johndoe45',
        profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
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
    userId: '@johndoe45',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Carla',
    lastName: 'Smith',
    email: 'carlasmith27@gmail.com',
    password: 'carlasmith27',
    username: 'Carla Smith',
    followers: [],
    following: [],
    posts: [
      {
        _id: uuid(),
        username: 'Carla Smith',
        userId: '@carla12',
        profilePic: 'https://www.w3schools.com/howto/img_avatar2.png',
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
        username: 'Carla Smith',
        userId: '@carla12',
        profilePic: 'https://www.w3schools.com/howto/img_avatar2.png',
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
    userId: '@carla12',
    profilePic: 'https://www.w3schools.com/howto/img_avatar2.png',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Carlos',
    lastName: '',
    email: 'carlos123@gmail.com',
    password: 'carlos123',
    username: 'Carlos',
    followers: [],
    following: [],
    posts: [
      {
        _id: uuid(),
        username: 'Carlos',
        userId: '@carlos123',
        profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
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
    userId: '@carlos123',
    profilePic: 'https://www.w3schools.com/howto/img_avatar2.png',
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
];
