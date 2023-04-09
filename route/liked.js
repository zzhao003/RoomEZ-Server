const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

router.post("/getlikes", (req, res) => {
  knex("lovestory")
    .join("user", "user.id", "lovestory.user_id")
    .select(
      // "id",
      "img_url",
      "first_name",
      "last_name",
      "age",
      "gender",
      "profession",
      "budget",
      "area",
      "pet",
      "movein_date",
      "about"
    )
    .where({ like: req.body.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving user ${err}`));
});

router.post("/postalike", (req, res) => {
  const newLike = { ...req.body, id: randomUUID() };
  knex("lovestory")
    .insert(newLike)
    .then((data) => {
      //mysql does not send res back about post status
      res.status(201).json(newLike);
    })
    .catch((err) => res.status(400).send(`Error sending the like: ${err}`));
});

module.exports = router;
