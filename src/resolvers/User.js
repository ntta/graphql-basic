const User = {
  posts(parent, _args, { db }, _info) {
    return db.posts.filter((post) => post.author === parent.id);
  },
  comments(parent, _args, { db }, _info) {
    return db.comments.filter((comment) => comment.author === parent.id);
  },
};

export { User as default };
