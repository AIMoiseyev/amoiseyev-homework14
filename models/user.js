const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

// function validatePassword(string) {
//   const password = /^[A-Za-z]\w{8,14}$/;
//   console.log(string);
//   console.log(string.match(password));
//   if (string.match(password)) {
//     return true;
//   }
//   return false;
// }

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
    validate: {
      validator(link) {
        return validator.isURL(link);
      },
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    // validate: validatePassword,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
