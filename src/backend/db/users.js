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
    username: 'carljones',
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
];
