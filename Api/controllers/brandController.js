import asyncHandler from "express-async-handler";
import Brand from "../models/Brands.js";
import { createSlug } from "../helper/slug.js";
import { cloudRemove, cloudUpload } from "../utils/cloudinary.js";
import { findPublicId } from "../helper/helpers.js";

/**
 * @DESC Get all Brands data
 * @ROUTE /api/v1/Brand
 * @method GET
 * @access public
 */
export const getAllBrand = asyncHandler(async (req, res) => {
  const allBrands = await Brand.find();

  if (allBrands.length > 0) {
    return res.status(200).json(allBrands);
  } else {
    res.status(200).json({ message: "Brand not found" });
  }
});

/**
 * @DESC Get Single Brands data
 * @ROUTE /api/v1/Brand/:id
 * @method GET
 * @access public
 */
export const getSingleBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const brand = await Brand.findById(id);

  if (!brand) {
    return res.status(404).json({ message: "Brand data not found" });
  }

  res.status(200).json(brand);
});

/**
 * @DESC Create new Brand
 * @ROUTE /api/v1/Brand
 * @method POST
 * @access public
 */
export const createBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Brand are required" });
  }
  // file manage

  if (!req.file) {
    return res.status(400).json({ message: "Brand Logo are required" });
  }

  // check Brand name
  const BrandCheck = await Brand.findOne({ name });

  if (BrandCheck) {
    return res.status(400).json({ message: "Brand already exists" });
  }

  let logo = null;
  if (req.file) {
    logo = await cloudUpload(req.file.path);
  }

  // create new Brand
  const brand = await Brand.create({
    name,
    slug: createSlug(name),
    logo,
  });

  res.status(200).json({ brand, message: "Brand created successfully" });
});

/**
 * @DESC Delete Brand
 * @ROUTE /api/v1/Brand/:id
 * @method DELETE
 * @access private
 */
export const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const brand = await Brand.findByIdAndDelete(id);

  if (brand.logo) {
    const publicId = findPublicId(brand.logo);
    await cloudRemove(publicId);
  }

  res.status(200).json({ brand, message: "Brand Deleted successfully" });
});

/**
 * @DESC Update Brand
 * @ROUTE /api/v1/Brand/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Brand Name are required" });
  }

  const brandUpdate = await Brand.findById(id);
  if (brandUpdate) {
    return res.status(400).json({ message: "Not Found Brand" });
  }
  let updatedLogo = brandUpdate.logo;
  if (req.file) {
    const logo = await cloudUpload(req);
    updatedLogo = logo.secure_url;
    // remove image
    await cloudRemove(findPublicId(brandUpdate.photo));
  }
  brandUpdate.name = name;
  brandUpdate.slug = createSlug(name);
  brandUpdate.logo = updatedLogo;
  brandUpdate.save();
  res
    .status(200)
    .json({ brand: brandUpdate, message: "Brand updated successfully" });
});

/**
 * @DESC Update Brand
 * @ROUTE /api/v1/Brand/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateBrandStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { status } = req.body;

  const brand = await Brand.findByIdAndUpdate(
    id,
    {
      status,
    },
    { new: true }
  );

  res.status(200).json({ brand, message: " Status updated successfully" });
});
