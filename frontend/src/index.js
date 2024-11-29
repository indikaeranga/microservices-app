const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const port = 5000;

// Configure EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route to render data from backend
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://backend-service:5000/data");
    res.render("index", { items: response.data });
  } catch (error) {
    console.error("Error fetching data from backend:", error);
    res.status(500).send("Error loading data.");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Frontend service running on port ${port}`);
});

