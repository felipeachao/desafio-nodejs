import express from "express";
import { SchedulingController } from "../controllers/controller";

const router = express.Router();

router.post("/scheduling", SchedulingController.createScheduling);
router.get("/scheduling", SchedulingController.listScheduling);
router.delete("/scheduling/:id", SchedulingController.deleteScheduling);

export default router;
