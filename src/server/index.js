// Global dependencies
const express = require('express');

// Configure Express application server
const app = express();
const PORT = process.env.PORT || 3000;

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error Encountered:', err);
  res.status(500);
  res.send(err);
});

// Start server
app.listen(PORT, () => console.log('Server started on port', PORT));
