const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simple route for user registration
app.post('/register', (req, res) => {
  // Here you would normally add your registration logic
  res.send({ message: 'User registered successfully!' });
});

app.listen(port, () => {
  console.log(`User Service listening at http://localhost:${port}`);
});
