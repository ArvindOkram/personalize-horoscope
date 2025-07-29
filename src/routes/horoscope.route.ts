import router, { Router } from "express";
import horoscopeController from "../controllers/horoscope.controller";
import { authenticate } from "../middleware/auth.middleware";
import { rateLimiter } from "../middleware/rate-limiter.middleware";

const horoscopeRouter: Router = router();

/**
 * @swagger
 * /horoscope/today:
 *   get:
 *     summary: Get today's horoscope for authenticated user
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Horoscope
 *     responses:
 *       200:
 *         description: Horoscope result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 description:
 *                   type: string
 *                 mood:
 *                   type: string
 *                 to_do:
 *                   type: string
 *                 to_avoid:
 *                   type: string
 *       401:
 *         description: Unauthorized
 */
horoscopeRouter.get("/today", authenticate,rateLimiter, horoscopeController.getUserHoroscope);

/**
 * @swagger
 * /horoscope/history:
 *   get:
 *     summary: Get horoscope history for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Horoscope
 *     responses:
 *       200:
 *         description: List of past horoscopes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   description:
 *                     type: string
 *                     example: Slow and steady progress is key today.
 *                   mood:
 *                     type: string
 *                     example: Disciplined
 *                   to_do:
 *                     type: string
 *                     example: Set realistic goals, take responsibility
 *                   to_avoid:
 *                     type: string
 *                     example: Workaholism, being too rigid
 *       401:
 *         description: Unauthorized (if token is missing or invalid)
 */
horoscopeRouter.get("/history", authenticate, rateLimiter, horoscopeController.getUserHoroscopeHistory);

export default horoscopeRouter;