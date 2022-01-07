const { Router } = require('express');
const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// GET route
router.get('/', (req, res) => {
    let queryText = `
        SELECT * FROM "tasks"
    `;
    pool.query(queryText)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((error) => {
            console.log('GET failed', error);
            res.sendStatus(500);
        });
});


// POST route
router.post('/', (req, res) => {
    let newTask = req.body;
    console.log('Adding a new task', newTask);

    let queryText = `
        INSERT INTO "tasks"
            ("task", "addedBy", "dateAdded", "deadline", "completedBy")
        VALUES
            ($1, $2, $3, $4, $5)       
    `;

    let queryParams = [
        req.body.task,
        req.body.addedBy,
        req.body.dateAdded,
        req.body.deadline,
        req.body.completedBy
    ];
    console.log('queryText is: ', queryText);
    
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('POST failed', error);
            res.sendStatus(500);
        })
});


// PUT route
router.put('/:id', (req, res) => {

});


// DELETE route
router.delete('/:id', (req, res) => {

})



module.exports = router;
