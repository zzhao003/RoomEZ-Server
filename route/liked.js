const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

router.post("/getlikes", (req, res) => {
  knex("lovestory")
    .join("user", "user.id", "lovestory.user_id")
    .select(
      "lovestory.id",
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

router.delete("/", (req, res) => {
  knex("lovestory")
    .where({ id: req.body.id })
    .del()
    .then((data) => {
      if (data == 0) {
        return res
          .status(404)
          .send(`Entry with id: ${req.body.id} is not found`);
      }
      res.status(204).send(`Entry with id: ${req.body.id} is deleted`);
    })
    .catch((err) =>
      res.status(400).send(`Error deleting entry ${req.body.id} ${err}`)
    );
});

module.exports = router;
