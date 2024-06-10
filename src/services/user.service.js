const {User} = require('../models');



async function getUserByEmail(det) {
  const user = await User.findOne(det);
  return user;
}


module.exports = {
  getUserByEmail
};
