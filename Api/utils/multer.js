import multer from "multer";

// Munlter Storage Congfigration
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + Math.floor(Math.random() * 1000) + "_" + file.fieldname
    );
  },
});

// Multer for Brand Logo
export const brandLogo = multer({ storage }).single("logo");
export const categoryPhoto = multer({ storage }).single("catPhoto");
export const productPhoto = multer({ storage }).array("productPhoto");
