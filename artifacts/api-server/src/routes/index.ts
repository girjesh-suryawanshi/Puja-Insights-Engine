import { Router, type IRouter } from "express";
import healthRouter from "./health";
import bookingsRouter from "./bookings";
import contactRouter from "./contact";
import authRouter from "./auth";
import adminRouter from "./admin";
import settingsRouter from "./settings";
import blogsRouter from "./blogs";
import { authMiddleware } from "../middlewares/auth";

const router: IRouter = Router();

router.use(healthRouter);
router.use(bookingsRouter);
router.use(contactRouter);
router.use("/auth", authRouter);
router.use("/settings", settingsRouter);
router.use("/blogs", blogsRouter);

// Protected Admin Routes
router.use("/admin", authMiddleware(["admin", "editor"]), adminRouter);

export default router;
