import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";
import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getSingleBrand,
  updateBrand,
  updateBrandStatus,
} from "../controllers/brandController.js";
import { brandLogo } from "../utils/multer.js";

const route = express.Router();

// use verify token
route.use(tokenVerify);

// create route

route.route("/").get(getAllBrand).post(brandLogo, createBrand);
route
  .route("/:id")
  .get(getSingleBrand)
  .delete(deleteBrand)
  .patch(brandLogo, updateBrand)
  .put(brandLogo, updateBrand);
route.route("/status/:id").patch(updateBrandStatus);

// export default router
export default route;
