const Query = {
  users(_parent, args, { db }, _info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()));
  },
  posts(_parent, args, { db }, _info) {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(args.query.toLowerCase()) ||
        post.body.toLowerCase().includes(args.query.toLowerCase()),
    );
  },
  comments(_parent, _args, { db }, _info) {
    return db.comments;
  },
  me() {
    return {
      id: 'abc',
      name: 'Aaron',
      email: 'aaron.ntta@gmail.com',
    };
  },
  post() {
    return {
      id: 'bdf',
      title: 'And Then There Were None',
      body: 'This is a body',
      published: true,
    };
  },
};

export { Query as default };
