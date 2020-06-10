const Pool = require('pg').Pool


const pool = new Pool({
    user: 'syedrafinaqvi',
    host: 'localhost',
    password: null,
    port: 5432,
    database: 'tododatabase'
})

module.exports = pool

