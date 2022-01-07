const pg = require('pg');

const pool = new pg.Pool({
    database: 'weekend-to-do-app',
    
})