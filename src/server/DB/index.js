// options for pg-promise
const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    console.log('Connected to database:', cp.database);
  },
  disconnect(client, dc) {
    const cp = client.connectionParameters;
    console.log('Disconnecting from database:', cp.database);
  },
  query(e) {
    console.log('QUERY:', e.query);
  },
  receive(data, result, e) {
    console.log('DATA: ', data);
  }
}

// requires
const pgp = require('pg-promise')(initOptions);
require('dotenv').config();

// cn
const connectionString = "postgres://lzifmynw:hdBiND6R1SbP7oYgmqOUct4MTeAHa5K_@pellefant.db.elephantsql.com:5432/lzifmynw";

// connect to DB
const db = pgp(connectionString);
db.connect();

module.exports = db;