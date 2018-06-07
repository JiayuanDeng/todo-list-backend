module.exports = {
  network : {
    port:3001
  },
  jwt: {
    secret: 'er74hyrkja6',
    expiresIn: '1 days'
  },
  mongodb: {
    uri: 'mongodb://localhost:27017/todo_list_backend'
  }
};