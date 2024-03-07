require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/profile", (req, res) => {
  res.send("<h1>anish102</h1>");
});

app.get("/github", (req, res) => {
  res.send("https://github.com/anish102");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
