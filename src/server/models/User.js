// Import dependencies
const bcrypt = require('bcryptjs');
const db = require('../db/index.js');

const userModel = {};

userModel.create = function(user, password) {
	// This is where we obtain the hash of the user's password
	console.log('creating user:', user);
	const passwordDigest = bcrypt.hashSync(password, 10);
	return db.none(
		'INSERT INTO users (user, password_digest) VALUES ($1, $2);',
		[user, passwordDigest]
	);
};

userModel.findUser = function(user) {
  return db.oneOrNone('SELECT * FROM users WHERE username = $1;',[user]) // query for a row where username = username and password = passworddigest
};

userModel.verifyUserMiddleware = function(req, res, next) {
  console.log('verifying user', req.body.username);
  const passwordDigest = bcrypt.hashSync(req.body.password, 10);
  userModel
    .findUser(req.body.username)
    .then(row => {
      if (bcrypt.compareSync(req.body.password, row[0].passwordDigest))
        next();
    })
    .catch(err => {
      console.log("username and or password incorrect", err);
    })
}

module.exports = userModel;