const express = require('express');
const router = express.Router();
const db = require('../db');

// Endpoint to fetch users
router.get('/', (req, res) => {
    db.all("SELECT * FROM user", [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

module.exports = router;
