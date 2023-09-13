import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";

import { productPhoto } from "../utils/multer.js";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  updateProductStatus,
} from "../controllers/productController.js";

const route = express.Router();

// use verify token
route.use(tokenVerify);

// create route

route.route("/").get(getAllProduct).post(productPhoto, createProduct);
route
  .route("/:id")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .patch(productPhoto, updateProduct)
  .put(productPhoto, updateProduct);
route.route("/status/:id").patch(updateProductStatus);

// export default router
export default route;
