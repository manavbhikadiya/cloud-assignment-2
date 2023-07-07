const mysql = require("mysql");

const db = mysql.createConnection({
  host: "networkassignment-instance-1.cervgyu2axbj.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "admin123",
  database: "networkassignment",
});

db.connect((err) => {
  if (err) {
    console.error("Database Connection Failed", err);
    return;
  }
  console.log("Connected to the database.");
});

const createTableQuery = `CREATE TABLE IF NOT EXISTS products (
  name VARCHAR(100),
  price VARCHAR(100),
  availability boolean
)`;

db.query(createTableQuery, (err) => {
  if (err) {
    console.error("Error creating table:", err);
    return;
  }
  console.log("Table created or already exists");
});

module.exports = db;
