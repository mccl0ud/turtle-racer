// Import dependencies
const db = require('../db/index.js');

const userModel = {};

userModel.createUser = function(user, password) {
	return db.oneOrNone(
    'INSERT INTO users (username, password_digest, wpm_avg, completed_races) VALUES ($1, $2, $3, $4) RETURNING *;',
    // all users should start with 0 wpm/completed races
		[user, password, 0, 0]
	);
};

userModel.findUser = function(user) {
  return db.oneOrNone('SELECT * FROM users WHERE username = $1;',[user]) // query for a row where username = username and password = passworddigest
};

module.exports = userModel;