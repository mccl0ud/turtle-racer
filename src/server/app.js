// Global dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Controlla's
const UserController = require('./controllers/Users');
const Token = require('./services/TokenService');

// Configure Express application server
const app = express();

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error Encountered:', err);
  res.status(500);
  res.send(err);
});

// parse application/json
app.use(bodyParser.json());

// parse incoming JWT's
app.use(Token.receiveToken);

// authorize users still need to be accomplished
app.post('/signUp', 
  UserController.createUserMiddleWare, 
  Token.createToken,
  Token.sendToken
);

// app.post('/login', 
//   UserController.verifyUserMiddleware, 
//   UserController.authorizeUserMiddleWare, 
// );

// connect to server
app.listen(4000, () => console.log('listening...'))

module.exports = app