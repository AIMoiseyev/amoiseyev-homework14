const usersRouter = require('express')
  .Router();
const {
  getUsers,
  createUser,
  findUser,
  updateProfile,
  updateAvatar,
  login,
} = require('../controllers/users');

usersRouter.get('/users', getUsers);
usersRouter.get('/users/:id', findUser);
usersRouter.post('/signup', createUser);
usersRouter.post('/signin', login);
usersRouter.patch('/users/me', updateProfile);
usersRouter.patch('/users/me/avatar', updateAvatar);

module.exports = usersRouter;
