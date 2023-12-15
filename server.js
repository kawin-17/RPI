const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { Server } = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle join event when a user wants to join the live audio stream
  socket.on('join', () => {
    // Broadcast an event to all clients indicating a new user joined
    io.emit('userJoined', { userId: socket.id });
  });

  // Handle disconnect event when a user leaves the live audio stream
  socket.on('disconnect', () => {
    // Broadcast an event to all clients indicating a user left
    io.emit('userLeft', { userId: socket.id });
  });
});
