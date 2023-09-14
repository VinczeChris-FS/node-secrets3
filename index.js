const express = require("express");

const app = express();

// To use Dotenv package
require("dotenv").config();

// Get environment variables from .env file
const port = process.env.PORT;
const host = process.env.HOST;
const firstName = process.env.FIRST_NAME;
const lastName = process.env.LAST_NAME;

app.get("/", (req, res) => {
  res.send(`${firstName} ${lastName}'s Node Secrets Assignment`);
});

app.listen(port, host, () => {
  console.log(`App listening on port ${port}`);
});
