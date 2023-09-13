import asyncHandler from "express-async-handler";
import Tag from "../models/Tag.js";
import { createSlug } from "../helper/slug.js";

/**
 * @DESC Get all Tags data
 * @ROUTE /api/v1/Tag
 * @method GET
 * @access public
 */
export const getAllTag = asyncHandler(async (req, res) => {
  const allTags = await Tag.find();

  if (allTags.length > 0) {
    return res.status(200).json(allTags);
  } else {
    res.status(200).json({ message: "Tag not found" });
  }
});

/**
 * @DESC Get Single Tags data
 * @ROUTE /api/v1/Tag/:id
 * @method GET
 * @access public
 */
export const getSingleTag = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const singleTag = await Tag.findById(id);

  if (!singleTag) {
    return res.status(404).json({ message: "Tag data not found" });
  }

  res.status(200).json(singleTag);
});

/**
 * @DESC Create new Tag
 * @ROUTE /api/v1/Tag
 * @method POST
 * @access public
 */
export const createTag = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Tag are required" });
  }

  // check Tag name
  const TagCheck = await Tag.findOne({ name });

  if (TagCheck) {
    return res.status(400).json({ message: "Tag already exists" });
  }

  // create new Tag
  const tag = await Tag.create({
    name,
    slug: createSlug(name),
  });

  res.status(200).json({ tag, message: "Tag created successfully" });
});

/**
 * @DESC Delete Tag
 * @ROUTE /api/v1/Tag/:id
 * @method DELETE
 * @access private
 */
export const deleteTag = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const tag = await Tag.findByIdAndDelete(id);

  res.status(200).json({ tag, message: "Tag Deleted successfully" });
});

/**
 * @DESC Update Tag
 * @ROUTE /api/v1/Tag/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateTag = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const tag = await Tag.findByIdAndUpdate(
    id,
    {
      name,
      slug: createSlug(name),
    },
    { new: true }
  );

  res.status(200).json({ tag, message: "Tag updated successfully" });
});

/**
 * @DESC Update Tag
 * @ROUTE /api/v1/Tag/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateTagStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { status } = req.body;

  const tag = await Tag.findByIdAndUpdate(
    id,
    {
      status,
    },
    { new: true }
  );

  res.status(200).json({ tag, message: " Status updated successfully" });
});
