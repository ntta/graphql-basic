const users = [
  {
    id: '1',
    name: 'Aaron',
    email: 'aaron@example.com',
  },
  {
    id: '2',
    name: 'Baron',
    email: 'baron@example.com',
    age: 30,
  },
  {
    id: '3',
    name: 'Caron',
    email: 'caron@example.com',
  },
];

const posts = [
  {
    id: '1',
    title: 'Title 1',
    body: 'This is a special',
    published: true,
    author: '1',
  },
  {
    id: '2',
    title: 'Title 2',
    body: 'Body 2',
    published: true,
    author: '1',
  },
  {
    id: '3',
    title: 'Title 3',
    body: 'This is something special',
    published: true,
    author: '2',
  },
];

const comments = [
  {
    id: '1',
    text: 'This is the first comment',
    author: '1',
    post: '3',
  },
  {
    id: '2',
    text: 'This is the second comment',
    author: '1',
    post: '2',
  },
  {
    id: '3',
    text: 'This is the third comment',
    author: '2',
    post: '2',
  },
  {
    id: '4',
    text: 'This is the fourth comment',
    author: '3',
    post: '1',
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
