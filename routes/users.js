const usersRouter = require('express')
  .Router();
const { getUsersData, doesUserExist, sendUser } = require('../helpers/helpers');

usersRouter.get('/users', getUsersData);
usersRouter.get('/users/:id', doesUserExist);
usersRouter.get('/users/:id', sendUser);

module.exports = usersRouter;
