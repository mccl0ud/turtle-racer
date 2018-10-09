const pgp = require('pg-promise')(/* options */);
require('dotenv').config();

const connectionString = process.env.PGURI;

// connect to DB
const db = pgp(connectionString);
db.connect();

module.exports = db;