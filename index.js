const express = require('express');
require('dotenv').config();

const { PORT } = process.env;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('*', (req, res) => {
  res.send('<h1>404 Page</h1>');
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
