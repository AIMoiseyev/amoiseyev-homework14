const usersRouter = require('express')
  .Router();
const { getUsers, createUser, findUser } = require('../controllers/users');
// const { getUsersData, doesUserExist, sendUser } = require('../helpers/helpers');

// usersRouter.get('/users', getUsersData);
// usersRouter.get('/users/:id', doesUserExist);
// usersRouter.get('/users/:id', sendUser);

usersRouter.get('/users', getUsers);
usersRouter.get('/users/:id', findUser);
usersRouter.post('/users', createUser);

module.exports = usersRouter;
