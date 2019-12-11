const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3001);
app.locals.title = 'BE - Narkal';
app.use(express.json());



app.get('/', (request, response) => {
  response.send('Oh hey there, BE Narkal');
});



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

// app.get('/api/v1/pets', (request, response) => {
//   const pets = app.locals.pets;

//   return response.json({ pets });
// });
