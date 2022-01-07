const { Router } = require('express');
const express = require('express');
const tasksRouter = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// GET route
tasksRouter.get('/', (req, res) => {

});