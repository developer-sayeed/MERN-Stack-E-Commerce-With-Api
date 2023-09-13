import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";
import {
  createTag,
  deleteTag,
  getAllTag,
  getSingleTag,
  updateTag,
  updateTagStatus,
} from "../controllers/tagController.js";

const route = express.Router();

// use verify token
route.use(tokenVerify);

// create route

route.route("/").get(getAllTag).post(createTag);
route
  .route("/:id")
  .get(getSingleTag)
  .delete(deleteTag)
  .patch(updateTag)
  .put(updateTag);
route.route("/status/:id").patch(updateTagStatus);

// export default router
export default route;
