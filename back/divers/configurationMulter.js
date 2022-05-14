const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    // remplace les espaces pas des "_"
    const name = file.originalname
      .split(" ")
      .join("")
      .split(".")
      .join("")
      .split("jpeg")
      .join("")
      .split("jpg")
      .join("")
      .split("png")
      .join("")
      .split("JPEG")
      .join("")
      .split("JPG")
      .join("")
      .split("PNG")
      .join("");

    // determine les extensions
    const extension = MIME_TYPES[file.mimetype];
    // assigne un nom de fichier avec date
    callback(null, name + Date.now() + "." + extension);
  },
});
// single : n'exporte que l'image
module.exports = multer({ storage: storage }).single("image");
