import { v4 as uuid } from 'uuid';
// import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */
/**
 * {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: 'adarshbalika',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: 'shubhamsoni',
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
 */

export const posts = [
  {
    _id: uuid(),
    username: 'Carlos',
    userId: '@carlos123',
    profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
    title: 'Lorem Ipsum',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    banner:
      'https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg',
    likes: 4,
    comments: 3,
    bookmarked: false,
    dateOfCreation: 1647076844
  },
  {
    _id: uuid(),
    username: 'Jane Doe',
    userId: '@janedoe234',
    profilePic: 'https://www.w3schools.com/w3images/avatar5.png',
    title: 'Lorem Ipsum',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    banner:
      'https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg',
    likes: 2,
    comments: 3,
    bookmarked: true,
    dateOfCreation: 1649841644
  },
  {
    _id: uuid(),
    username: 'John Doe',
    userId: '@johndoe45',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    title: 'Lorem Ipsum',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    likes: 5,
    comments: 3,
    bookmarked: false,
    dateOfCreation: 1641806444
  },
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
    likes: 6,
    comments: 3,
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
    likes: 6,
    comments: 3,
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
    likes: 6,
    comments: 3,
    bookmarked: false,
    dateOfCreation: 1646904044
  }
];
