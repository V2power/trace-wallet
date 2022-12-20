const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const users = [];

function checkExistsUserAccount(req, res, next) {}

app.post("/wallets", (req, res) => {
  const { ownerName } = req.body;

  const user = {
    id: uuidv4(),
    name: ownerName,
    limit: 0,
    payments: [],
  };

  users.push(user);

  return res.status(201).json(user);
});

module.exports = app;
