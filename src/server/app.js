// Global dependencies
const express = require('express');

// Controlla's
const UserController = require('./controllers/Users');

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
  UserController.authorizeUserMiddleWare, 
  UserController.startSession
);

module.exports = app