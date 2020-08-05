const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cardsRouter);
app.use('/', usersRouter);
app.use((req, res, next) => {
  res.status(404).send(
    { message: 'Запрашиваемый ресурс не найден' },
  );
  next();
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
