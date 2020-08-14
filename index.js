const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let date = new Date();
  res.json({
    date: date,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
