const cardsRouter = require('express')
  .Router();
const { createCard, getCards, deleteCard } = require('../controllers/cards');

// cardsRouter.get('/cards', getCardsData);
cardsRouter.get('/cards', getCards);
cardsRouter.post('/cards', createCard);
cardsRouter.delete('/cards/:cardId', deleteCard);

module.exports = cardsRouter;
