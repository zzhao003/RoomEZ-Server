const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", (req, res) => {
  knex("user")
    .select(
      "id",
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
    .then((data) => {
      const randomNum = Math.floor(Math.random() * data.length);
      res.status(200).json(data[randomNum]);
    })
    .catch((err) => res.status(400).send(`Error retrieving user ${err}`));
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

module.exports = router;
