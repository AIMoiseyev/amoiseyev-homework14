const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.status(200)
      .send({ data: cards }))
    .catch(() => res.status(500)
      .send({ message: 'На сервере произошла ошибка' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({
    name,
    link,
    owner: req.user._id,
  })
    .then((card) => res.status(200)
      .send({ data: card }))
    .catch((err) => {
      if (err.message.indexOf('validation failed')) {
        res.status(400)
          .send({ message: err.message });
        return;
      }
      res.status(500)
        .send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.message.indexOf(' Cast to ObjectId failed')) {
        res.status(404)
          .send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.status(500)
        .send({ message: 'На сервере произошла ошибка' });
    });
};
