import express from "express";
import { loginUser, refreshAccessToken, registerUser } from "../controller/authController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh-token", refreshAccessToken); // Refresh token endpoint

export default router;
