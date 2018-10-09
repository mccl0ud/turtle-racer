const pgp = require('pg-promise')(/* options */);
require('dotenv').config();

// connect to DB
// unsure why process.env.PGURI is not working
const db = pgp("postgres://lzifmynw:hdBiND6R1SbP7oYgmqOUct4MTeAHa5K_@pellefant.db.elephantsql.com:5432/lzifmynw");

db.connect();

module.exports = db;