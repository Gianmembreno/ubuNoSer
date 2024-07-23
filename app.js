const express = require('express');
const db = require('./db');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

// Close the database connection
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Closed the database connection.');
        process.exit(0);
    });
});
