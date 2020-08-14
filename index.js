const express = require('express');
const moment = require('moment');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  let date = moment();
  res.render('index', { date: date.format('LLL') });
});

app.get('/error', (req, res) => {
  throw new Error('Boom!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
