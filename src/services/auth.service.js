const {User} = require('../models');


async function createUser(user) {
  console.log(JSON.stringify(user))
  return await User.create(user);
}


module.exports = {
  createUser,
};
