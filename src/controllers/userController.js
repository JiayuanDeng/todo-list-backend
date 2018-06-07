var jwtLib = require('../libs/jwtLib');
var errorLib = require('../libs/errorLib');
var userService = require('../services/userService');

var userController = {
  register: (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;
    if (email !== undefined && password !== undefined) {
      userService.ifNotExist(email)
        .then(() => {
          userService.createUser(email, password);
          res.status(200).json(jwtLib.getRes(email));
        })
        .catch((err) => {
          next(err);
        });
    }
  },

  login: (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;
    userService.getUser(email, password)
      .then(() => {
        res.status(200).json(jwtLib.getRes(email));
      })
      .catch((err) => {
        next(err);
      });
  },

  account: (req, res, next) => {
    console.log(req.user.email);
    res.status(200).json(req.user);
  }
};

module.exports = userController;
