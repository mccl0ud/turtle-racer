// Global dependencies
const express = require('express');

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

// authorize users still need to be accomplished
app.post('/signUp', 
  UserController.createUserMiddleWare, 
  Token.createToken,
  Token.sendToken,
  
);

app.post('/login', 
  UserController.verifyUserMiddleware, 
  UserController.authorizeUserMiddleWare, 
);

module.exports = app