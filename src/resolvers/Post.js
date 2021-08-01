const Post = {
  author(parent, _args, { db }, _info) {
    return db.users.find((user) => user.id === parent.author);
  },
  comments(parent, _args, { db }, _info) {
    return db.comments.filter((comment) => comment.post === parent.id);
  },
};

export { Post as default };
