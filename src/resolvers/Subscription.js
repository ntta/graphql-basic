const Subscription = {
  count: {
    subscribe(_parent, _args, { pubsub }, _info) {
      let count = 0;

      setInterval(() => {
        count++;
        pubsub.publish('count', { count });
      }, 1000);

      return pubsub.asyncIterator('count');
    },
  },
  comment: {
    subscribe(_parent, { postId }, { db, pubsub }, _info) {
      const post = db.posts.find((post) => post.id === postId && post.published);
      if (!post) {
        throw new Error('Post not found');
      }

      return pubsub.asyncIterator(`comment ${postId}`);
    },
  },
  post: {
    subscribe(_parent, _args, { pubsub }, _info) {
      return pubsub.asyncIterator(`post`);
    },
  },
};

export { Subscription as default };
