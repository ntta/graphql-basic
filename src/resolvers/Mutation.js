import { v4 } from 'uuid';

const Mutation = {
  createUser(_parent, args, { db }, _info) {
    const emailTaken = db.users.some((user) => user.email.toLowerCase() === args.data.email.toLowerCase());

    if (emailTaken) {
      throw new Error('Email taken');
    }

    const user = {
      id: v4(),
      ...args.data,
    };

    db.users.push(user);
    return user;
  },
  deleteUser(_parent, args, { db }, _info) {
    const userIndex = db.users.findIndex((user) => user.id === args.id);
    if (userIndex < 0) {
      throw new Error('User not found');
    }

    const deletedUsers = db.users.splice(userIndex, 1);

    db.posts = posts.filter(() => {
      const match = post.author === args.id;
      if (match) {
        comments = db.comments.filter((comment) => comment.post !== post.id);
      }

      return !match;
    });
    db.comments = db.comments.filter((comment) => comment.author !== args.id);
    return deletedUsers[0];
  },
  updateUser(_parent, args, { db }, _info) {
    const { id, data } = args;
    const user = db.users.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    if (typeof data.email === 'string') {
      const emailTaken = db.users.some((user) => user.email === data.email);
      if (emailTaken) throw new Error('Email taken');
      user.email = data.email;
    }

    if (typeof data.name === 'string') {
      user.name = data.name;
    }

    if (typeof data.age !== 'undefined') {
      user.age = data.age;
    }

    return user;
  },
  createPost(_parent, args, { db }, _info) {
    const userExists = db.users.some((user) => user.id === args.data.author);

    if (!userExists) {
      throw new Error('User not found');
    }

    const post = {
      id: v4(),
      ...args.data,
    };

    db.posts.push(post);
    return post;
  },
  deletePost(_parent, args, { db }, _info) {
    const postIndex = db.posts.findIndex((post) => post.id === args.id);
    if (postIndex < 0) {
      throw new Error('Post not found');
    }

    const deletedPosts = db.posts.splice(postIndex, 1);
    db.comments = db.comments.filter((comment) => comment.post !== args.id);
    return deletedPosts[0];
  },
  createComment(_parent, args, { db }, _info) {
    const userExists = db.users.some((user) => user.id === args.data.author);
    if (!userExists) throw new Error('User not found');

    const postExists = db.posts.some((post) => post.id === args.data.post && post.published);
    if (!postExists) throw new Error('Post not found');

    const comment = {
      id: v4(),
      ...args.data,
    };

    db.comments.push(comment);
    return comment;
  },
  deleteComment(_parent, args, { db }, _info) {
    const commentIndex = db.comments.findIndex((comment) => comment.id === args.id);
    if (commentIndex < 0) {
      throw new Error('Comment not found');
    }

    const deletedComments = db.comments.splice(commentIndex, 1);
    return deletedComments[0];
  },
};

export { Mutation as default };
