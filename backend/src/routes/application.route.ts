import { Router } from "express";
import { ApplicationController } from "../controllers/application.controller";

const applicationController = new ApplicationController();

const router = Router();

router.post("/", (req, res) => applicationController.createApplication(req, res));
router.get("/", (req, res) => applicationController.getAllApplications(req, res));
router.get("/:id", (req, res) => applicationController.getApplicationById(req, res));
router.put("/:id", (req, res) => applicationController.updateApplication(req, res));
router.delete("/:id", (req, res) => applicationController.deleteApplication(req, res));

export default router;
