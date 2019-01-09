const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./src/routes/users');
const goalRoutes = require('./src/routes/goals');
const taskRoutes = require('./src/routes/tasks');
const commentRoutes = require('./src/routes/comments');
const noteRoutes = require('./src/routes/notes');

const app = express();
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({ exposedHeaders: ["authorization"] }));

const port = 5000;

app.use('/users', userRoutes);
app.use('/goals', goalRoutes);
app.use('/tasks', taskRoutes);
app.use('/comments', commentRoutes);
app.use('/notes', noteRoutes);


app.get('/', (request, response) => {
  response.status(200).send('Hello Nick, I am your new AI working');
});

app.listen(port, () => {
  console.log(`we are live on ${port}`)
});

