const mongoose = require('mongoose');
const { validateImage } = require('../helpers/helpers');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  link: {
    required: true,
    type: String,
    match: [
      new RegExp(validateImage, 'i'),
    ],
  },
});

module.exports = mongoose.model('card', cardSchema);
