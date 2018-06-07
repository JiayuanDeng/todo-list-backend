var mongoose = require('mongoose');

var authoritySchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});

var authorityModel = mongoose.model('authorities', authoritySchema);

module.exports = authorityModel;