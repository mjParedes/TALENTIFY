import { Router } from "express";
import { ExperienceController } from "../controllers/experience.controller";

const experienceController = new ExperienceController()

const router = Router()

router.post('/', (req, res) => experienceController.createExperience(req, res))

router.get('/', (req, res) => experienceController.getAllExperiences(req, res))

router.get('/:id', (req, res) => experienceController.getExperienceById(req, res))

router.put('/:id', (req, res) => experienceController.updateExperience(req, res))

router.delete('/:id', (req, res) => experienceController.deleteExperience(req, res))

export default router
