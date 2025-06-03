import express from "express";

import {
  create,
  deleteUser,
  fetch,
  updateUser,
} from "../controller/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const route = express.Router();

route.post("/create", authMiddleware, create);
route.get("/getAllUsers", authMiddleware, fetch);
route.put("/update/:id", authMiddleware, updateUser);
route.delete("/delete/:id", authMiddleware, deleteUser);

export default route;
