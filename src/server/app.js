// Global dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Controlla's
const UserController = require('./controllers/Users');
const Token = require('./services/TokenService');

// Configure Express application server
const app = express();

// const decoded = Token.decode("eyJhbGciOiJIUzI1NiJ9.aGVsbG8.5WeZGyDtzkaWQbci6JaZ1yISkklVdyUEGiXyFyy3Q8M");
// console.log("decoded", decoded);

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

// setting up '/' route
app.get('/',Token.checkAuth, (req, res) => {
  res.sendfile(path.resolve(__dirname, '../../dist/index.html'));
})

// authorize users still need to be accomplished
app.post('/signUp', 
  UserController.createUserMiddleWare, 
  Token.createToken,
  Token.sendToken,
  (req, res) => {
    console.log(req.headers);
  }
);

app.post('/login', 
  UserController.verifyUserMiddleware, 
  Token.createToken,
  Token.sendToken
);


// connect to server
app.listen(4000, () => console.log('listening...'))

module.exports = app