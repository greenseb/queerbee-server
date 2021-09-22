const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  matches: {
    type: Array,
    required: false,
  },
  interests: {
    type: Array,
    required: false,
  },
  gender: {
    type: Array,
    required: true,
  },
  orientation: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
