const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  }
});

const User = mongoose.model('User', genreSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).required()
  };

  return Joi.validate(genre, schema);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre; 
exports.validate = validateGenre;