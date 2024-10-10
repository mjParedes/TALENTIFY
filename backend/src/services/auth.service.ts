import { PrismaClient } from "@prisma/client";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

export class AuthService {
  constructor(private readonly jwtInstance = jwt) {}

  /**
   * Valida el usuario comparando el nombre de usuario o correo electrónico
   * con la contraseña proporcionada.
   */
  public async validateUser(
    usernameOrEmail: string,
    password: string
  ): Promise<any | null> {
    // Busca el usuario por email o username
    const user = await prisma.users.findFirst({
      where: {
        OR: [
          { email: usernameOrEmail },
          { fullName: usernameOrEmail },
        ],
      },
    });

    // Si se encuentra el usuario y la contraseña coincide, lo retorna
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }

    return null;
  }

  /**
   * Genera un token JWT con el payload proporcionado.
   */
  private signToken(payload: jwt.JwtPayload, secret: string) {
    return this.jwtInstance.sign(payload, secret, { expiresIn: "1h" });
  }

  /**
   * Genera un JWT y devuelve el usuario junto con el token.
   */
  public async generateJWT(
    user: any
  ): Promise<{ accessToken: string; user: any }> {
    // Consulta el rol del usuario si es necesario
    const userWithRole = await prisma.users.findUnique({
      where: { id: user.id },
      include: { role: true }, // Incluye el rol en la consulta
    });

    // Define el payload del token
    const payload: jwt.JwtPayload = {
      role: userWithRole?.role?.user || "USER", // Asume un rol "user" si no se define
      sub: userWithRole!.id,
    };

    // Genera y devuelve el token y el usuario
    return {
      accessToken: this.signToken(payload, process.env.JWT_SECRET!),
      user: { ...userWithRole, password: undefined }, // No incluimos la contraseña
    };
  }
}
