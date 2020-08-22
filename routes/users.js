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

const auth = require('../middlewares/auth');

usersRouter.get('/users', auth, getUsers);
usersRouter.get('/users/:id', auth, findUser);
usersRouter.post('/signup', createUser);
usersRouter.post('/signin', login);
usersRouter.patch('/users/me', auth, updateProfile);
usersRouter.patch('/users/me/avatar', auth, updateAvatar);

module.exports = usersRouter;
