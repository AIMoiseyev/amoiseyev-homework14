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
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        return Promise.reject(new Error('Нет пользователя с таким id'));
      }
      if (req.user._id.toString() !== card.owner.toString()) {
        return Promise.reject(new Error('Недостаточно прав'));
      }
      return Card.findByIdAndRemove(req.params.cardId)
        .then((match) => res.send({ data: match }));
    })
    .catch((err) => {
      if (!err.message.indexOf('Недостаточно прав')) {
        return res.status(403)
          .send({ message: err.message });
      }
      if (!err.message.indexOf('Нет пользователя с таким id')) {
        return res.status(404)
          .send({ message: err.message });
      }
      return res.status(500)
        .send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.message.indexOf(' Cast to ObjectId failed')) {
        res.status(404)
          .send({ message: 'Нет карточки с таким id' });
        return;
      }
      res.status(500)
        .send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.message.indexOf(' Cast to ObjectId failed')) {
        res.status(404)
          .send({ message: 'Нет карточки с таким id' });
        return;
      }
      res.status(500)
        .send({ message: 'На сервере произошла ошибка' });
    });
};
