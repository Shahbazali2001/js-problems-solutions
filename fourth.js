console.log("Hello this is fourth question")

// Import express module
const express = require('express');

// Create a new express application
 const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for the about page
 app.get('/about', (req, res) => {
  res.send('About Page');
});