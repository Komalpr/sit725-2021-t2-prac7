const http = require('http');
const express = require('express');
const wishListController = require('./controllers/wishListController');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);

// Express middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Routes
app.use('/api/accounts', require('./routes/accounts'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

// Listen when the client connects or disconnects
io.on('connection', (socket) => {
  console.log('Client has connected:', socket.id);
  wishListController(io, socket);
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('The server is running on port:', 3000);
});
