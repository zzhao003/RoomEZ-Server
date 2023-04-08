const { config, uploader } = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();

exports.cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  next();
};

exports.uploader = uploader;
