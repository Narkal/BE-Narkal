const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const cors = require('cors');


app.use(cors());

app.use(express.json());

app.locals.title = 'BE - Narkal';

app.get('/', (request, response) => {
  response.send('Oh hey there, BE Narkal');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});


module.exports = app;
