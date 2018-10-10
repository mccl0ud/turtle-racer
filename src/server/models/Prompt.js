// Import dependencies
const db = require('./../DB/index.js');

const promptModel = {}

promptModel.addPrompt = function(id, title, text) {
  return db.oneOrNone(
    'INSERT INTO prompts (id, title, text) VALUES ($1, $2, $3) RETURNING *;',
    [id, title, text]
  );
};

promptModel.findOne = function(title) {
  return db.oneOrNone(
    'SELECT text FROM prompts WHERE title=$1;',
    [title]
  );
};

promptModel.getRandom = function() {
  return db.oneOrNone(
    'SELECT text FROM prompts ORDER BY RANDOM() LIMIT 1;'
  );
};

module.exports = promptModel;
