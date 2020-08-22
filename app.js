const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
