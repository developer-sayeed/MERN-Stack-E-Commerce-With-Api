import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  updateCategoryStatus,
} from "../controllers/categoryController.js";
import { categoryPhoto } from "../utils/multer.js";

const route = express.Router();

// use verify token
route.use(tokenVerify);

// create route

route.route("/").get(getAllCategory).post(categoryPhoto, createCategory);
route
  .route("/:id")
  .get(getSingleCategory)
  .delete(deleteCategory)
  .patch(categoryPhoto, updateCategory)
  .put(categoryPhoto, updateCategory);
route.route("/status/:id").patch(updateCategoryStatus);

// export default router
export default route;
