const { Pool } = require('pg');

const pool = new Pool({
    user: "your_username",
    password: 'your_password',
    host: "localhost",
    database: "BlogDB"
});

module.exports = pool;