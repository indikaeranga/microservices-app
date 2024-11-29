const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 5000;

// MySQL connection
const db = mysql.createConnection({
  host: "database",
  user: "root",
  password: "rootpassword",
  database: "microservices_app",
});

// Test connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to the database.");
  }
});

// Route to fetch data
app.get("/data", (req, res) => {
  db.query("SELECT * FROM items", (err, results) => {
    if (err) {
      res.status(500).send("Error fetching data from database.");
    } else {
      res.json(results);
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Backend service running on port ${port}`);
});

