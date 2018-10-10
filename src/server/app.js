// Global dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Controlla's
const PromptController = require('./controllers/Prompts');
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
app.get('/', Token.checkAuth, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
})

// authorize users still need to be accomplished
app.post('/signUp', 
  UserController.createUserMiddleWare, 
  Token.createToken,
  Token.sendToken,
);

app.post('/login', 
  UserController.verifyUserMiddleware, 
  Token.createToken,
  Token.sendToken
);

app.get('/getRandomPrompt', PromptController.getRandom)

// route to get a specified prompt from the database
app.post('/getSpecPrompt', PromptController.findOne)

// route to post a prompt to database
app.post('/addPrompt', PromptController.addPrompt)

// connect to server
app.listen(4000, () => console.log('listening...'))

module.exports = app