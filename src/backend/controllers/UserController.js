import { Response } from 'miragejs';
import { formatDate, requiresAuth } from '../utils/authUtils';
import { v4 as uuid } from 'uuid';

/**
 * All the routes related to user are present here.
 * */

/**
 * This handler handles gets all users in the db.
 * send GET Request at /api/users
 * */

export const getAllUsersHandler = function () {
  return new Response(200, {}, { users: this.db.users });
};

/**
 * This handler handles get a user from userId in the db.
 * send GET Request at /api/users/:userId
 * */

export const getUserHandler = function (schema, request) {
  const userId = request.params.userId;
  try {
    const user = schema.users.findBy({ _id: userId }).attrs;
    return new Response(200, {}, { user });
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
 * This handler handles updating user details.
 * send POST Request at /api/users/edit
 * body contains { userData }
 * */

export const editUserHandler = function (schema, request) {
  let user = requiresAuth.call(this, request);
  try {
    if (!user) {
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
    const { userData } = JSON.parse(request.requestBody);
    user = { ...user, ...userData, updatedAt: formatDate() };
    this.db.users.update({ _id: user._id }, user);
    return new Response(201, {}, { user });
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
 * This handler gets all the user bookmarks from the db.
 * send GET Request at /api/users/bookmark/
 * */

export const getBookmarkPostsHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
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
    return new Response(200, {}, { bookmarks: user.bookmarks });
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
 * This handler handles adding a post to user's bookmarks in the db.
 * send POST Request at /api/users/bookmark/:postId/
 * */

export const bookmarkPostHandler = function (schema, request) {
  const { postId } = request.params;
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
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

    const isBookmarked = user.bookmarks.some(
      (currPost) => currPost._id === postId
    );
    if (!isBookmarked) {
      user.bookmarks.push(postId);
    }
    this.db.users.update(
      { _id: user._id },
      { ...user, updatedAt: formatDate() }
    );
    return new Response(200, {}, { bookmarks: user.bookmarks });
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
 * This handler handles adding a post to user's bookmarks in the db.
 * send POST Request at /api/users/remove-bookmark/:postId/
 * */

export const removePostFromBookmarkHandler = function (schema, request) {
  const { postId } = request.params;
  let user = requiresAuth.call(this, request);
  try {
    if (!user) {
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
    
    const filteredBookmarks = user.bookmarks.filter(
      (currPostId) => currPostId !== postId
    );
    user = { ...user, bookmarks: filteredBookmarks };
    
    this.db.users.update(
      { _id: user._id },
      { ...user, updatedAt: formatDate() }
    );
    return new Response(200, {}, { bookmarks: user.bookmarks });

    // post.bookmarked = false;
    // this.db.posts.update({ _id: postId }, { ...post, updatedAt: formatDate() });
    // return new Response(201, {}, { posts: this.db.posts });
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
 * This handler handles follow action.
 * send POST Request at /api/users/follow/:followUserId/
 * */

export const followUserHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  const { followUserId } = request.params;
  const followUser = schema.users.findBy({ _id: followUserId }).attrs;
  try {
    if (!user) {
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
    const isFollowing = user.following.some(
      (currUser) => currUser._id === followUser._id
    );

    if (isFollowing) {
      return new Response(400, {}, { errors: ['User Already following'] });
    }

    const updatedUser = {
      ...user,
      following: [
        ...user.following,
        {
          _id: followUser._id,
          username: followUser.username
        }
      ]
    };
    const updatedFollowUser = {
      ...followUser,
      followers: [
        ...followUser.followers,
        { _id: user._id, username: user.username }
      ]
    };
    this.db.users.update(
      { _id: user._id },
      { ...updatedUser, updatedAt: formatDate() }
    );
    this.db.users.update(
      { _id: followUser._id },
      { ...updatedFollowUser, updatedAt: formatDate() }
    );
    return new Response(
      200,
      {},
      { user: updatedUser, followUser: updatedFollowUser }
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

/**
 * This handler handles unfollow action.
 * send POST Request at /api/users/unfollow/:followUserId/
 * */

export const unfollowUserHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  const { followUserId } = request.params;
  const followUser = this.db.users.findBy({ _id: followUserId });
  try {
    if (!user) {
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
    const isFollowing = user.following.some(
      (currUser) => currUser._id === followUser._id
    );

    if (!isFollowing) {
      return new Response(400, {}, { errors: ['User already not following'] });
    }

    const updatedUser = {
      ...user,
      following: user.following.filter(
        (currUser) => currUser._id !== followUser._id
      )
    };
    const updatedFollowUser = {
      ...followUser,
      followers: followUser.followers.filter(
        (currUser) => currUser._id !== user._id
      )
    };
    this.db.users.update(
      { _id: user._id },
      { ...updatedUser, updatedAt: formatDate() }
    );
    this.db.users.update(
      { _id: followUser._id },
      { ...updatedFollowUser, updatedAt: formatDate() }
    );
    return new Response(
      200,
      {},
      { user: updatedUser, followUser: updatedFollowUser }
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

/**
 * This handler handles fetching notifications for a user.
 * send GET Request at /api/users/notification
 * */

export const getNotifications = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
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

    return new Response(201, {}, { notifications: user.notifications });
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
 * This handler handles adding new notification for a user.
 * send POST Request at /api/users/notification/:userId
 * 
 * {
    liked: false,
    followed: false,
    comment: '',
    postId: 'P1',
    username: 'Carlos',
    profilePic: 'https://www.w3schools.com/w3images/avatar5.png'
  }
 * */

export const updateNotifications = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
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
    const userId = request.params.userId;
    const userToUpdate = schema.users.findBy({ _id: userId }).attrs;
    const { notificationObject } = JSON.parse(request.requestBody);
    const notification = {
      _id: uuid(),
      ...notificationObject,
      createdAt: formatDate(),
      updatedAt: formatDate()
    };
    userToUpdate.notifications.push(notification);
    this.db.users.update(
      { _id: userToUpdate._id },
      { ...userToUpdate, updatedAt: formatDate() }
    );
    return new Response(201);
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
 * This handler handles fetching notifications for a user.
 * send POST Request at /api/users/seen
 * */

export const seenNotificationsUpdate = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
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
    const userNotifications = user.notifications;
    let temp = userNotifications.map((item) => ({ ...item, unseen: false }));
    user.notifications = [...temp];
    this.db.users.update(
      { _id: user._id },
      { ...user, updatedAt: formatDate() }
    );
    return new Response(201, {}, { notifications: user.notifications });
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
