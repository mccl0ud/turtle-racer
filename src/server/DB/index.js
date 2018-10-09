const pgp = require('pg-promise')(/* options */);
require('dotenv').config();

// connect to DB
const db = pgp(process.env.PGURI);
db.connect();

module.exports = db;