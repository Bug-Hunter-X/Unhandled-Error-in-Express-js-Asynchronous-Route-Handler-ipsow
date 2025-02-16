const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        throw new Error('Something went wrong!');
      } else {
        res.send('Hello from Express!');
      }
    } catch (error) {
      next(error); // Pass the error to the error handling middleware
    }
  }, 1000);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});