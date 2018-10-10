// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Controlla's
const PromptController = require('./controllers/Prompts');
const UserController = require('./controllers/Users');
const Token = require('./services/TokenService');

// Configure Express application server
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const lobby = io.of('/lobby');

lobby.on('connection', socket => {
  console.log(`Client ${socket.client.id} joined the lobby.`);
  lobby.emit('broadcast', `Client ${socket.client.id} joined the lobby.`);

  // listen for 'joinRoom' event to subscribe client to room
  socket.on('joinRoom', room => {
    socket.join(room);
    console.log(`Client ${socket.client.id} joined ${room}.`);
  });

  // listen for 'leaveRoom' event to unsubscribe client from room
  socket.on('leaveRoom', room => {
    socket.leave(room);
    console.log(`Client ${socket.client.id} left ${room}.`);
  });

  // capture user input triggered by keystrokes
  socket.on('keystroke', data => console.log(`Client ${socket.client.id}: ${data}`));

  socket.on('disconnect', () => {
    console.debug(`Client ${socket.client.id} left the lobby.`);
  });
  socket.on('error', error => {
    console.error(`Client ${socket.client.id} threw an error: ${error}`);
  });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error Encountered:', err);
  res.status(500);
  res.send(err);
});

// parse application/json
app.use(bodyParser.json());

// setting up '/' route
app.get('/', Token.checkAuth, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

// authorize users still need to be accomplished
app.post('/signUp', UserController.createUserMiddleWare, Token.createToken, Token.sendToken);

app.post('/login', UserController.verifyUserMiddleware, Token.createToken, Token.sendToken);

app.get('/getRandomPrompt', PromptController.getRandom);

// route to get a specified prompt from the database
app.post('/getSpecPrompt', PromptController.findOne);

// route to post a prompt to database
app.post('/addPrompt', PromptController.addPrompt);

// connect to server
// app.listen(4000, () => console.log('listening...'));

module.exports = server;
