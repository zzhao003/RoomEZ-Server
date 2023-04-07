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
      //filter out incomplete profiles
      const filteredData = data.filter((item) => item.first_name !== null);
      const randomNum = Math.floor(Math.random() * filteredData.length);
      res.status(200).json(data[randomNum]);
    })
    .catch((err) => res.status(400).send(`Error retrieving user ${err}`));
});

// update user info route
router.put("/", (req, res) => {
  knex("user")
    .where({ id: req.body.id })
    .update(req.body)
    .then((data) => {
      //data is 1 if found if 0 not found.
      if (data == 0) {
        return res
          .status(404)
          .send(`User with id: ${req.body.id} is not found`);
      }
      res.status(200).send("Update Successful");
    })
    .catch((err) => {
      res.status(400).send(`Error updating user ${err}`);
    });
});

module.exports = router;
