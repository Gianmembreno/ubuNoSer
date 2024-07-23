const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

// Create a table
db.serialize(() => {
    db.run("CREATE TABLE user (id INT, name TEXT)");

    // Insert sample data
    let stmt = db.prepare("INSERT INTO user VALUES (?, ?)");
    stmt.run(1, "John Doe");
    stmt.finalize();
});

module.exports = db;
