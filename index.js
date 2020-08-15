const express = require('express');
const moment = require('moment');
require('moment-timezone');

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  let date = moment();
  let formattedDate = date.tz('Europe/Berlin').format('LLL');
  res.render('index', { date: formattedDate });
});

app.get('/error', (req, res) => {
  throw new Error('Boom!');
});

app.get('/search', (req, res) => {
  res.redirect('http://www.google.com/');
});

app.get('/old-page', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
