// Import dependencies
const express = require('express');
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

module.exports = server;
