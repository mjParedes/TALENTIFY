import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // Registro de usuario
  public async signup(req: Request, res: Response): Promise<Response> {
    const { email, password, fullName, role } = req.body;

    // Validación de campos
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "Email, password, and full name are required" });
    }
    const validRoles = new Set(['USER', 'RECRUITER']);
    if (role !== undefined && role !== null && !validRoles.has(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // Verificar si el usuario ya existe
    const existingUser = await this.authService.validateUser(email, password);
    if (existingUser) {
      return res.status(409).json({ message: "User already registered" });
    }

    // Crear un nuevo usuario con un role por defecto
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        role: role ?? "USER",
      },
    });

    return res.status(201).json({ user: { ...newUser, password: undefined } });
  }

  // Login y validación de usuario
  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    // Validar usuario
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials: user not found or password is incorrect" });
    }

    // Generar token JWT
    const { accessToken, user: safeUser } = await this.authService.generateJWT(user);

    return res.status(200).json({ accessToken, user: safeUser });
  }
}


