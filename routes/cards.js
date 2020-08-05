const cardsRouter = require('express').Router();
const { getCardsData } = require('../helpers/helpers');

cardsRouter.get('/cards', getCardsData);

module.exports = cardsRouter;
