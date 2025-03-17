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

// Create function for basic promise
function createPromise(value, shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(new Error('Promise rejected'));
      }
    }, 1000);
  });
}

// Resolve function
function resolvePromise(value) {
  return createPromise(value, true);
}

// Reject function
function rejectPromise(value) {
  return createPromise(value, false);
}

// Example usage of promise chaining
resolvePromise('First Promise')
  .then(result => {
    console.log(result);
    return resolvePromise('Second Promise');
  })
  .then(result => {
    console.log(result);
    return rejectPromise('Third Promise');
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });