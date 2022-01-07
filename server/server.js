console.log('in server.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const tasksRouter = require('./routes/tasks.router');

// setup body-parser
app.use (bodyParser.urlencoded({ extended:true }));
app.use (bodyParser.json());

// point express to public files
app.use(express.static('server/public'));

// tasks router setup
app.use('/tasks', tasksRouter);

// listening on PORT
app.listen(PORT, () => {
    console.log('up and running on PORT', PORT);
});
