// Global dependencies
const PORT = process.env.PORT || 3000;

// Configure Express application server
const app = './app';

// Start server
app.listen(PORT, () => console.log('Server started on port', PORT));
