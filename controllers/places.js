const placesRouter = require('express').Router();
const places = require('../models/places');

placesRouter.get('/', (req, res) => {
  res.render('places/Index', { places })
});

placesRouter.get('/new', (req, res) => {
  res.render('places/New');
});

placesRouter.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('Error404');
  } else if (!places[id]) {
    res.render('Error404');
  }
  else {
    res.render('Show', { place: places[id], id });
  }
});

placesRouter.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('Error404');
  } else if (!places[id]) {
    res.render('Error404');
  } else {
    places.splice(id, 1);
    res.redirect('/places');
  }
});

placesRouter.post('/', (req, res) => {
  if (!req.body.pic) {
    // default image if one isn't provided
    req.body.pic = 'http://placekitten.com/400/400';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  places.push(req.body);
  res.redirect('/places');
});

module.exports = placesRouter;
