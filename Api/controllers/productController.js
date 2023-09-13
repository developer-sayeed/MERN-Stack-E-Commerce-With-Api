import asyncHandler from "express-async-handler";
import { createSlug } from "../helper/slug.js";
import { cloudRemove, cloudUpload } from "../utils/cloudinary.js";
import { findPublicId } from "../helper/helpers.js";
import Product from "../models/Product.js";

/**
 * @DESC Get all Products data
 * @ROUTE /api/v1/product
 * @method GET
 * @access public
 */
export const getAllProduct = asyncHandler(async (req, res) => {
  const allProducts = await Product.find();

  if (allProducts.length > 0) {
    return res.status(200).json(allProducts);
  } else {
    res.status(200).json({ message: "Product not found" });
  }
});

/**
 * @DESC Get Single Products data
 * @ROUTE /api/v1/Product/:id
 * @method GET
 * @access public
 */
export const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product data not found" });
  }

  res.status(200).json(product);
});

/**
 * @DESC Create new Product
 * @ROUTE /api/v1/Product
 * @method POST
 * @access public
 */
export const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    productType,
    productSimple,
    productVariable,
    productGroup,
    productExternal,
    shortDesc,
    longDesc,
    specification,
    categories,
    tags,
    brand,
    shipping,
  } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Product are required" });
  }

  // check Product name
  const ProductCheck = await Product.findOne({ name });

  if (ProductCheck) {
    return res.status(400).json({ message: "Product already exists" });
  }
  // File manage
  const photos = req.files;
  if (!photos) {
    return res.status(400).json({ message: "Product Photos are required" });
  }
  let productPhotos = [];
  if (photos) {
    for (let i = 0; i < photos.length; i++) {
      const fileData = await cloudUpload(photos[i].path);
      productPhotos.push(fileData);
    }
  }

  const simpleData = JSON.parse(productSimple);

  console.log({ ...simpleData, productPhotos });
  // create new Product
  const product = await Product.create({
    name,
    slug: createSlug(name),
    productType,
    productSimple:
      productType === "simple"
        ? { ...simpleData, productPhoto: productPhotos }
        : null,
    productVariable: productType === "variable" ? productVariable : null,
    productExternal: productType === "external" ? productExternal : null,
    productGroup: productType === "group" ? productGroup : null,
    shipping,
    shortDesc,
    longDesc,
    specification,
  });

  res.status(200).json({ message: "Product created successfully", product });
});

/**
 * @DESC Delete Product
 * @ROUTE /api/v1/Product/:id
 * @method DELETE
 * @access private
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  if (product.logo) {
    const publicId = findPublicId(product.logo);
    await cloudRemove(publicId);
  }

  res.status(200).json({ product, message: "Product Deleted successfully" });
});

/**
 * @DESC Update Product
 * @ROUTE /api/v1/Product/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Product Name are required" });
  }

  const ProductUpdate = await Product.findById(id);
  if (ProductUpdate) {
    return res.status(400).json({ message: "Not Found Product" });
  }
  let updatedLogo = ProductUpdate.logo;
  if (req.files) {
    const logo = await cloudUpload(req);
    updatedLogo = logo.secure_url;
    // remove image
    await cloudRemove(findPublicId(ProductUpdate.photo));
  }
  ProductUpdate.name = name;
  ProductUpdate.slug = createSlug(name);
  ProductUpdate.logo = updatedLogo;
  ProductUpdate.save();
  res
    .status(200)
    .json({ product: ProductUpdate, message: "Product updated successfully" });
});

/**
 * @DESC Update Product
 * @ROUTE /api/v1/Product/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateProductStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { status } = req.body;

  const product = await Product.findByIdAndUpdate(
    id,
    {
      status,
    },
    { new: true }
  );

  res.status(200).json({ product, message: " Status updated successfully" });
});
