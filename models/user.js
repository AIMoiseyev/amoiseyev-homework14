const mongoose = require('mongoose');
const { validateImage } = require('../helpers/helpers');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    required: true,
    type: String,
    match: [
      new RegExp(validateImage, 'g'),
    ],
  },
});

module.exports = mongoose.model('user', userSchema);
