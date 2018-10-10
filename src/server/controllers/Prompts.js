const Prompt = require('../models/Prompt');

module.exports = {

  addPrompt: function(req, res, next) {
    console.log("adding prompt: ", req.body.title);
    Prompt.addPrompt(req.body.id, req.body.title, req.body.text)
      .then(prompt => {
        console.log("successfully added prompt", prompt.title);
        res.sendStatus(200);
      })
      .catch(err => {
        console.log('Error creating prompt', err);
      });
  },

  findOne: function(req, res, next) {
    console.log("finding prompt where title =", req.body.title);
    Prompt.findOne(req.body.title)
      .then(prompt => {
        console.log("this was returned", prompt.text);
        res.sendStatus(200);
      })
      .catch(err => {
        console.log('Error finding prompt with that title', err);
      });
  },

  getRandom: function(req, res, next) {
    console.log("grabbing random prompt");
    Prompt.getRandom()
      .then(prompt => {
        console.log("this is the prompt returned", prompt.text);
        res.sendStatus(200);
      })
      .catch(err => {
        console.log('Error while grabbing random prompt', err);
      });
  }
}