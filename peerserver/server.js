const { PeerServer } = require('peer');
const http = require('http');

const port = process.env.PORT || 9000;

const peerServer = PeerServer({
  port,
  path: '/peerjs',
  allow_discovery: true,
  corsOptions: { origin: '*' }
});

peerServer.on('connection', client => {
  console.log('Client connected:', client.getId());
});

peerServer.on('disconnect', client => {
  console.log('Client disconnected:', client.getId());
});

console.log(`PeerJS server running on port ${port}`);
