const express = require("express");
const app = express();
const cors = require("cors");

const feedRoutes = require("./route/feed");

require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

app.use(express.json());
app.use(cors());

app.use("/feed", feedRoutes);

app.listen(PORT, () => {
  console.log("server sucess");
});
