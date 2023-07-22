const places = require('express').Router();

places.get('/', (req, res) => {
  res.send('GET /places');
});

module.exports = places;
