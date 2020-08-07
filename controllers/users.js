const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200)
      .send({ data: users }))
    .catch(() => res.status(500)
      .send({ message: 'На сервере произошла ошибка' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({
    name,
    about,
    avatar,
  })
    .then((user) => res.status(200)
      .send({ data: user }))
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

module.exports.findUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200)
          .send({ data: user });
      }
      res.status(404)
        .send({ message: 'Нет пользователя с таким id' });
    })
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

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, {
    name,
    about,
  }, {
    new: true,
    runValidators: true,
    upsert: false,
  })
    .then((user) => {
      if (user) {
        res.status(200)
          .send({ data: user });
      }
      res.status(404)
        .send({ message: 'Нет пользователя с таким id' });
    })
    .catch((err) => {
      if (err.message.indexOf(' Validation failed')) {
        res.status(400)
          .send({ message: err.message });
        return;
      }
      res.status(500)
        .send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, {
    avatar,
  }, {
    new: true,
    runValidators: true,
    upsert: false,
  })
    .then((user) => {
      if (user) {
        res.status(200)
          .send({ data: user });
      }
      res.status(404)
        .send({ message: 'Нет пользователя с таким id' });
    })
    .catch((err) => {
      if (err.message.indexOf(' Validation failed')) {
        res.status(400)
          .send({ message: err.message });
        return;
      }
      res.status(500)
        .send({ message: 'На сервере произошла ошибка' });
    });
};
