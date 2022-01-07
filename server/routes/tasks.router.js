const { Router } = require('express');
const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// GET route
router.get('/', (req, res) => {
    let queryText = `
        SELECT * FROM "tasks" ORDER BY "id" ASC
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
            ("task", "addedBy", "dateAdded", "deadline")
        VALUES
            ($1, $2, $3, $4, $5)       
    `;

    let queryParams = [
        req.body.task,
        req.body.addedBy,
        req.body.dateAdded,
        req.body.deadline,
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
    console.log('id is: ', req.params.id);
    console.log('Completed?', req.body.completed);
    

    const queryText = `
        UPDATE "tasks"
        SET "completed" = $1
        WHERE "id" = $2
    `;

    const queryParams = [
        req.body.completed,
        req.params.id
    ];
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('UPDATE error', error);
            res.sendStatus(500);
        });
});


// DELETE route
router.delete('/:id', (req, res) => {
    console.log('id is: ', req.params.id);

    let queryText = `
        DELETE FROM "tasks"
        WHERE id=$1:
    `;

    let queryParams = [
        req.params.id
    ];
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            res.sendStatus(204);    //204 = No Content
        })
        .catch((error) => {
            console.log('DELETE /tasks failed', error);
        });
});



module.exports = router;
