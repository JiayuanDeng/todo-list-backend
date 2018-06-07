var config = require('../config/config');
var errorLib = require('../libs/errorLib');


/* Database */
var mongoose = require('mongoose');
mongoose.connect(config.mongodb.uri);
var authorityModel = require('../models/authorityModel');


var userService = {
  createUser: (email, password) => {
    return new Promise((resolve, reject) => {
      var userData = {
        email: email,
        password: password
      };
      authorityModel.create(userData, (err) => {
        if (err)
          reject(errorLib.databaseFailureError);
        else
          resolve();
      });
    });
  },
  getUser: (email, password) => {
    return new Promise((resolve, reject) => {
      authorityModel
        .findOne({email: email, password: password}, (err, authority) => {
          if (err) {
            reject(errorLib.databaseFailureError);
          }
          else if (!authority) {
            reject(errorLib.badCredentialError);
          }
          else {
            resolve();
          }
        });
    });
  },
  ifNotExist: (email) => {
    return new Promise((resolve, reject) => {
      authorityModel
        .findOne({email: email}, (err, authority) => {
          if (err) {
            reject(errorLib.databaseFailureError);
          }
          else if (authority) {
            reject(errorLib.userAlreadyExistsError);
          }
          else {
            resolve();
          }
        })
    })
  }
};

module.exports = userService;