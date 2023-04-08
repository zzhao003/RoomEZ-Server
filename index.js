const express = require("express");
const app = express();
const cors = require("cors");

//multer with cloudinary
const { resolve } = require("path");
const { multerUploads, dataUri } = require("./middleware/multer");
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
// app.get("/*", (req, res) =>
//   res.sendFile(resolve(__dirname, "../public/index.html"))
// );
// app.get("/*", (req, res) =>
//   res.sendFile(resolve(__dirname, "../public/index.html"))
// );
app.post("/upload", multerUploads, (req, res) => {
  if (req.file) {
    const file = dataUri(req).content;
    return uploader
      .upload(file)
      .then((result) => {
        const image = result.url;
        return res.status(200).json({
          messge: "Your image has been uploded successfully to cloudinary",
          data: {
            image,
          },
        });
      })
      .catch((err) =>
        res.status(400).json({
          messge: "someting went wrong while processing your request",
          data: {
            err,
          },
        })
      );
  }
});

app.use("/api/feed", feedRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/signup", signupRoutes);

app.listen(PORT, () => {
  console.log("server sucess");
});
