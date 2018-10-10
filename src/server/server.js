// Import app server (need to export connection for supertest)
const server = require('./app');

// Configure Express application server
const PORT = process.env.PORT || 3333;

// Start server
server.listen(PORT, () => console.log('Server started on port', PORT));
