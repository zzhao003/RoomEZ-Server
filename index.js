const express = require("express");
const app = express();
const cors = require("cors");

const feedRoutes = require("./route/feed");
const loginRoutes = require("./route/login");
const signupRoutes = require("./route/signup");

require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

app.use(express.json());
app.use(cors());

app.use("/api/feed", feedRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/signup", signupRoutes);

app.listen(PORT, () => {
  console.log("server sucess");
});
