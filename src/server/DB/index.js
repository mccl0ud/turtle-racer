const pgp = require('pg-promise')();
require('dotenv').config();

// connect to DB
const db = pgp(process.env.SQL_URL);

module.exports=db;