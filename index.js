const express = require("express");
const app = express();
const cors = require("cors");

//multer with cloudinary
const { resolve } = require("path");
const { uploader, cloudinaryConfig } = require("./config/cloudinaryConfig");

const feedRoutes = require("./route/feed");
const loginRoutes = require("./route/login");
const signupRoutes = require("./route/signup");
const likedRoutes = require("./route/liked");
const chatRoutes = require("./route/chat");

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
app.use("/api/liked", likedRoutes);
app.use("/api/chat", chatRoutes);

const server = app.listen(PORT, () => {
  console.log("server sucess");
});

const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:3000" },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  socket.on("send-message", (message, room) => {
    io.to(room).emit("receive-message", message);
  });

  socket.on("join-room", (room) => {
    socket.join(room);
  });
});
