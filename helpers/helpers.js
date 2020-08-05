const cards = require('../data/cards.json');
const users = require('../data/users.json');

const getCardsData = (req, res) => {
  res.status(200).send(cards);
};

const getUsersData = (req, res) => {
  res.status(200).send(users);
};
const searchUser = (usersArray, id) => {
  const askedUser = usersArray.find((user) => user._id === id);
  return askedUser;
};
const doesUserExist = (req, res, next) => {
  const { id } = req.params;
  const askedUser = searchUser(users, id);
  if (!askedUser) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }
  next();
};

const sendUser = (req, res) => {
  const { id } = req.params;
  const askedUser = searchUser(users, id);
  res.status(200).send(askedUser);
};

module.exports = {
  getCardsData, getUsersData, doesUserExist, sendUser,
};
