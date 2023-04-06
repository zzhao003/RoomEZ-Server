const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.post("/", (req, res) => {
  knex("user")
    .select("passowrd")
    .where({ email: req.body.mail })
    .then((data) => {
      res.status(200).json(data[0]);
    })
    .catch((err) => res.status(400).send(`Error retrieving user ${err}`));
});

module.exports = router;
