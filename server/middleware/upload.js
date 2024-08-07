const multer = require("multer");
const path = require("path");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "games", // Folder name in your Cloudinary account
    allowed_formats: [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "webp",
      "avif",
      "svg",
      "mp4",
    ],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
