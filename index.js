const express = require("express");
const app = express();
const cors = require("cors");

//multer with cloudinary
const { resolve } = require("path");
const { uploader, cloudinaryConfig } = require("./config/cloudinaryConfig");

const feedRoutes = require("./route/feed");
const loginRoutes = require("./route/login");
const signupRoutes = require("./route/signup");

require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//multer with cloudinary
app.use(express.static(resolve(__dirname, "src/public")));
app.use("*", cloudinaryConfig);

app.use("/api/feed", feedRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/signup", signupRoutes);

app.listen(PORT, () => {
  console.log("server sucess");
});
