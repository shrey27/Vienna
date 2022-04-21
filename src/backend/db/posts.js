import { v4 as uuid } from 'uuid';
export const posts = [
  {
    _id: uuid(),
    userId: 'U1',
    username: 'Jane Doe',
    userHandler: '@janedoe234',
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
    userId: 'U2',
    username: 'John Doe',
    userHandler: '@johndoe45',
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
    userId: 'U3',
    username: 'Carla Smith',
    userHandler: '@carla12',
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
    userId: 'U0',
    username: 'Carl Jones',
    userHandler: '@carljones12',
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
    userId: 'U0',
    username: 'Carl Jones',
    userHandler: '@carljones12',
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
    userId: 'U4',
    username: 'Carlos',
    userHandler: '@carlos123',
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
  },
  {
    _id: uuid(),
    userId: 'U2',
    username: 'Jane Doe',
    userHandler: '@janedoe234',
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
  },
  {
    _id: uuid(),
    userId: 'U2',
    username: 'John Doe',
    userHandler: '@johndoe45',
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
    userId: 'U3',
    username: 'Carla Smith',
    userHandler: '@carla12',
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
];
