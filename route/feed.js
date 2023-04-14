const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const { multerUploads, dataUri } = require("../middleware/multer");
const { uploader, cloudinaryConfig } = require("../config/cloudinaryConfig");

router.post("/", (req, res) => {
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
      //filter out logged in user's profiles
      const filteredData = data
        .filter((item) => item.id !== req.body.id)
        .filter((item) => item.first_name !== null);
      const randomNum = Math.floor(Math.random() * filteredData.length);
      res.status(200).json(data[randomNum]);
    })
    .catch((err) => res.status(400).send(`Error retrieving user ${err}`));
});

// update user info route
router.put("/", multerUploads, (req, res) => {
  if (req.file) {
    const file = dataUri(req).content;
    uploader
      .upload(file)
      .then((result) => {
        const imageURL = result.url;
        knex("user")
          .where({ id: req.body.id })
          .update({ ...req.body, img_url: imageURL })
          .then((data) => {
            //data is 1 if found if 0 not found.
            if (data == 0) {
              return res
                .status(404)
                .send(`User with id: ${req.body.id} is not found`);
            }
            return res.status(200).json({ ...req.body, img_url: imageURL });
          });
      })
      .catch((err) => res.status(400).send(`Error updating user ${err}`));
  } else {
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
        res.status(200).json(req.body);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(`Error updating user ${err}`);
      });
  }
});

module.exports = router;
