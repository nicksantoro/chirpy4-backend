const express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
  response.status(200).send('Hello Nick, I am your new AI working');
});


app.listen(port, () => {
  console.log(`we are live on ${port}`)
})