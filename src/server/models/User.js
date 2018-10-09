// Import dependencies
const db = require('../db/index.js');

const userModel = {};

userModel.createUser = function(user, password) {
	return db.none(
		'INSERT INTO users (user, password_digest) VALUES ($1, $2);',
		[user, password]
	);
};

userModel.findUser = function(user) {
  return db.oneOrNone('SELECT * FROM users WHERE username = $1;',[user]) // query for a row where username = username and password = passworddigest
};

module.exports = userModel;