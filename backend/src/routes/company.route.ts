import { Router } from "express";
import { CompanyController } from "../controllers/company.controller";

const companyController = new CompanyController();

const router = Router();

router.post("/", (req, res) => companyController.createCompany(req, res));
router.get("/", (req, res) => companyController.getAllCompanies(req, res));
router.get("/:id", (req, res) => companyController.getCompanyById(req, res));
router.put("/:id", (req, res) => companyController.updateCompany(req, res));
router.delete("/:id", (req, res) => companyController.deleteCompany(req, res));

export default router;
