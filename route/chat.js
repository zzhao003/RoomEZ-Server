const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.post("/", (req, res) => {
  let likes = [];
  knex("lovestory")
    .join("user", "user.id", "lovestory.user_id")
    .select(
      "lovestory.id",
      "user_id",
      "like",
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
    .where({ like: req.body.id, match: "true" })
    .orWhere({ user_id: req.body.id, match: "true" })
    .then((data) => {
      const roomId = data[0].id;
      data.map((i, index) =>
        knex("user")
          .where({ id: i.like === req.body.id ? i.user_id : i.like })
          .then((l) => {
            console.log(l[0]);
            likes.push({ ...l[0], roomId });
            if (index === data.length - 1) res.status(200).json(likes);
          })
      );
    })
    .catch((err) => res.status(400).send(`Error retrieving user ${err}`));
});

module.exports = router;
