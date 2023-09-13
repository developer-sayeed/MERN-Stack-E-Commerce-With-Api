import cloudinary from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dhdx5eqx4",
  api_key: "487122829798895",
  api_secret: "cp7tC_bkOvwY1-t5kSb21M_4Ugw",
});

// Configure Cloud Storage Upload
export const cloudUpload = async (path) => {
  const data = await cloudinary.v2.uploader.upload(path, {
    folder: "E-Commerce",
  });
  return data.secure_url;
};

// Configure Cloud Storage Remove Photo
export const cloudRemove = async (publicId) => {
  await cloudinary.uploader.destroy(publicId);
};
