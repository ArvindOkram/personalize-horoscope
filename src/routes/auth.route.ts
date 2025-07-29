import router, { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import authcontroller from "../controllers/authcontroller";
import {
    loginValidator,
    logoutValidator,
    signUpValidator,
} from "./validators/auth.validator";

const authRouter: Router = router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       200:
 *         description: Successful login returns token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */
authRouter.post(
    "/login",
    loginValidator,
    authcontroller.login
); // return token

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout user and expire token
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful logout
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Logout successfully for manofculture3@gmail.com
 *       401:
 *         description: Unauthorized
 */
authRouter.post(
    "/logout",
    authenticate,
    logoutValidator,
    authcontroller.logout
); // expired token

/**
 * @swagger
 * /auth/sign-up:
 *   post:
 *     summary: Create a new user account
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: manofculture3@gmail.com
 *               password:
 *                 type: string
 *                 example: strongPassword123
 *     responses:
 *       201:
 *         description: Sign up successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sign up successful for manofculture3@gmail.com
 *       400:
 *         description: Invalid input or user already exists
 */
authRouter.post(
    "/sign-up",
    signUpValidator,
    authcontroller.signUp
);

export default authRouter;
