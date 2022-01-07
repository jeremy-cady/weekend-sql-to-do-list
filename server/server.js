console.log('in server.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// setup body-parser
app.use (bodyParser.urlencoded({ extended:true }));
app.use (bodyParser.json());

// point express to public files
app.use(express.static('server/public'));

// tasks router setup
let tasksRouter = require('./routes/tasks.router');
app.use('/songs', tasksRouter);

// listening on PORT
const PORT = 5000;
app.listen(PORT, () => {
    console.log('up and running on PORT', PORT);
});
