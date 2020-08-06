const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '5f2ae2869e0f3eb5c53d53f9',
  };

  next();
});

app.use('/', cardsRouter);
app.use('/', usersRouter);
app.use((req, res, next) => {
  res.status(404)
    .send(
      { message: 'Запрашиваемый ресурс не найден' },
    );
  next();
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
