const fakeUsers = require('../data/fakeUsers');

const getUsersFromDB = () => {
  return fakeUsers;
};

module.exports = { getUsersFromDB };
