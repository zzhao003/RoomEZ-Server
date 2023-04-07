const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

router.post("/", (req, res) => {
  knex("user")
    .select("id", "password", "first_name", "last_name")
    .where({ email: req.body.email })
    .then((data) => {
      if (data.length) {
        return res
          .status(403)
          .send(
            `Account with email: ${req.body.email} already exist, please log in.`
          );
      }
      const newUser = { ...req.body, id: randomUUID() };

      knex("user")
        .insert(newUser)
        .then((data) => {
          //mysql does not send res back about post status
          res.status(201).json(newUser);
        });
    })
    .catch((err) => res.status(400).send(`Error signing up: ${err}`));
});

module.exports = router;
