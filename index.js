const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const pool = require("./sql/connection");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/Books", (req, res) => {
  pool.query("SELECT * FROM Books", (err, rows) => {
    if (err) throw new Error(err);
    return res.json(rows);
  });
});

app.get("/Books/:id", (req, res) => {
  const id = req.params.id;

  pool.query(`SELECT * FROM Books WHERE id = ${id}`, (err, rows) => {
    if (err) throw new Error(err);
    return res.json(rows);
  });
});

app.listen(PORT, console.log(`I am listening on port ${5000}`));
