import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";

// Crear una instancia del AuthService
const authService = new AuthService();

// Crear una instancia del AuthController y pasar AuthService
const authController = new AuthController(authService);

// Crear una instancia de Express Router
const router = Router();

// Función auxiliar para manejar controladores asíncronos y capturar errores
const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Ruta para el registro de usuarios (usamos asyncHandler para manejar errores)
router.post("/signup", asyncHandler((req:any, res:any) => authController.signup(req, res)));

// Ruta para el login de usuarios
router.post("/login", asyncHandler((req:any, res:any) => authController.login(req, res)));

// Exportar las rutas
export default router;

