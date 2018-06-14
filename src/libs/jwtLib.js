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
    var accessToken = jwtLib.sign(email);
    var decodedAccessToken = jwt.decode(accessToken, {json: true});
    return {
      credential: {
        access_token: accessToken,
        email: decodedAccessToken.email,
        expire: decodedAccessToken.exp
      }
    }
  }
};


module.exports = jwtLib;