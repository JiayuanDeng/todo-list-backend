var errorLib = {
  badCredentialError: require('./errors/badCredentialError'),
  badRequestError: require('./errors/badRequestError'),
  databaseFailureError: require('./errors/databaseFailureError'),
  userAlreadyExistsError: require('./errors/userAlreadyExistsError')
};

module.exports = errorLib;