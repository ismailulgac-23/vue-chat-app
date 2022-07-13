import { Router } from "express";
import { UserController } from "../controllers";
const router = Router();
router.post("/", UserController.registerUser);
export default router;