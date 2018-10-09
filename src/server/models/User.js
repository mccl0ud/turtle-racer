// Import dependencies
const bcrypt = require('bcryptjs');
const db = require('../db/index.js');

const userModel = {};

userModel.create = function create(user, password) {
	// This is where we obtain the hash of the user's password
	console.log('creating user:', user);
	const passwordDigest = bcrypt.hashSync(password, 10);
	return db.none(
		'INSERT INTO users (user, password_digest) VALUES ($1, $2);',
		[user, passwordDigest]
	);
};