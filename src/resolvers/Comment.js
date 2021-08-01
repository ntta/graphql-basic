const Comment = {
  author(parent, _args, { db }, _info) {
    return db.users.find((user) => user.id === parent.author);
  },
  post(parent, _args, { db }, _info) {
    return db.posts.find((post) => post.id === parent.post);
  },
};

export { Comment as default };
