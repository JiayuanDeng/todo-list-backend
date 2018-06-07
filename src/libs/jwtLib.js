var jwt = require("jsonwebtoken");
var config = require('../config/config');

var jwtLib = {
  sign: (email) => {
    var token = jwt.sign(
      {
        email: email,
        refresh: 'true'
      },
      config.jwt.secret,
      {
        expiresIn: config.jwt.expiresIn
      }
    );
    console.log('Signed token of ' + JSON.stringify(jwt.decode(token, {json: true})));
    return token;
  },
  getRes: (email) => {
    return {
      credential: {
        access_token: jwtLib.sign(email)
      }
    }
  }
};


module.exports = jwtLib;