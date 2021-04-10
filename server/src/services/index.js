const users = require('./users/users.service.js');
const dogs = require('./dogs/dogs.service.js');
const eoi = require('./eoi/eoi.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(dogs);
  app.configure(eoi);
};
