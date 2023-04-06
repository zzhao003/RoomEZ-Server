const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./route/user");
const loginRoutes = require("./route/login");

require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/login", loginRoutes);

app.listen(PORT, () => {
  console.log("server sucess");
});
