import express from "express";

import { createUser, getUser } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.route("/").post(createUser).get(getUser);

export { userRouter };
