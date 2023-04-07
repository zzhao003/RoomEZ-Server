const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.post("/", (req, res) => {
  knex("user")
    .select("id", "password", "first_name", "last_name")
    .where({ email: req.body.email })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with email: ${req.body.email} is not found`);
      }
      if (data[0].password == req.body.password) {
        return res.status(200).json({
          first_name: data[0].first_name,
          last_name: data[0].last_name,
          id: data[0].id,
        });
      }
      return res.status(401).send(`Wrong password`);
    })
    .catch((err) => res.status(400).send(`Error retrieving user ${err}`));
});

module.exports = router;
