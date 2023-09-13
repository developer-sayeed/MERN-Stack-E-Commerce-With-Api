import asyncHandler from "express-async-handler";
import Category from "../models/Category.js";
import { createSlug } from "../helper/slug.js";
import { cloudRemove, cloudUpload } from "../utils/cloudinary.js";
import { findPublicId } from "../helper/helpers.js";

/**
 * @DESC Get all Categorys data
 * @ROUTE /api/v1/Category
 * @method GET
 * @access public
 */
export const getAllCategory = asyncHandler(async (req, res) => {
  const allCategorys = await Category.find().populate([
    {
      path: "parentCategory",
      populate: {
        path: "parentCategory",
        populate: {
          path: "parentCategory",
        },
      },
    },
    {
      path: "subCategory",
      populate: {
        path: "subCategory",
        populate: {
          path: "subCategory",
        },
      },
    },
  ]);

  if (allCategorys.length > 0) {
    return res.status(200).json(allCategorys);
  } else {
    res.status(200).json({ message: "Category not found" });
  }
});

/**
 * @DESC Get Single Categorys data
 * @ROUTE /api/v1/Category/:id
 * @method GET
 * @access public
 */
export const getSingleCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findById(id).populate([
    {
      path: "parentCategory",
      populate: {
        path: "parentCategory",
        populate: {
          path: "parentCategory",
        },
      },
    },
    {
      path: "subCategory",
      populate: {
        path: "subCategory",
        populate: {
          path: "subCategory",
        },
      },
    },
  ]);

  if (!category) {
    return res.status(404).json({ message: "Category data not found" });
  }

  res.status(200).json(category);
});

/**
 * @DESC Create new Category
 * @ROUTE /api/v1/Category
 * @method POST
 * @access public
 */
export const createCategory = asyncHandler(async (req, res) => {
  const { name, parentCategory, icon } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Category are required" });
  }

  // check Category name
  const CategoryCheck = await Category.findOne({ name });

  if (CategoryCheck) {
    return res.status(400).json({ message: "Category already exists" });
  }
  // Category Icon
  let categoryIcon = null;
  if (icon) {
    categoryIcon = icon;
  }

  // category Manage

  let catPhoto = null;
  if (req.file) {
    const cat = await cloudUpload(req);
    catPhoto = cat.secure_url;
  }
  // create new Category
  const category = await Category.create({
    name,
    slug: createSlug(name),
    icon: categoryIcon,
    parentCategory: parentCategory ? parentCategory : null,
    photo: catPhoto,
  });

  // parentCategory Configuration

  if (parentCategory) {
    const parent = await Category.findByIdAndUpdate(parentCategory, {
      $push: { subCategory: Category._id },
    });
  }

  res.status(200).json({ category, message: "Category created successfully" });
});

/**
 * @DESC Delete Category
 * @ROUTE /api/v1/Category/:id
 * @method DELETE
 * @access private
 */
export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findByIdAndDelete(id);

  if (category.photo) {
    await cloudRemove(findPublicId(category.photo));
  }

  res.status(200).json({ category, message: "Category Deleted successfully" });
});

/**
 * @DESC Update Category
 * @ROUTE /api/v1/Category/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name, parentCategory, icon } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name are required" });
  }
  // Find Category
  const categoryUpdate = await Category.findById(id);
  if (!categoryUpdate) {
    return res.status(400).json({ message: "Category Not Found" });
  }

  // Parent Category Update
  let parentCat = categoryUpdate.parentCategory;

  if (parentCat) {
    parentCat = parentCategory;
  }
  //  Category Icon Update
  let catIcon = categoryUpdate.icon;
  if (catIcon) {
    catIcon = icon;
  }
  //  Category Photo Update
  let catFile = categoryUpdate.photo;
  if (req.file) {
    // upload new photo
    const catPhoto = await cloudUpload(req);
    catFile = catPhoto.secure_url;
    // remove image
    await cloudRemove(findPublicId(categoryUpdate.photo));
  }

  categoryUpdate.name = name;
  categoryUpdate.slug = createSlug(name);
  categoryUpdate.parentCategory = parentCat;
  categoryUpdate.icon = catIcon;
  categoryUpdate.photo = catFile;
  categoryUpdate.save();

  res.status(200).json({
    category: categoryUpdate,
    message: "Category updated successfully",
  });
});

/**
 * @DESC Update Category
 * @ROUTE /api/v1/Category/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateCategoryStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { status } = req.body;

  const category = await category.findByIdAndUpdate(
    id,
    {
      status,
    },
    { new: true }
  );

  res.status(200).json({ category, message: " Status updated successfully" });
});
