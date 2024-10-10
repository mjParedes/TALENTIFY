import { Strategy as LocalStrat, VerifyFunction } from 'passport-local';
import { PassportUse } from '../utils/passport.use';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export class LocalStrategy {

    async validate(
    username: string,
    password: string,
    done: any
  ): Promise<void> {
    try {
      // Busca al usuario por email o username
      const user = await prisma.users.findFirst({
        where: {
          OR: [
            { email: username },
            { fullName: username },
          ],
        },
      });

      if (!user) {
        return done(null, false, { message: 'Invalid username or password' });
      }

      // Comparar contraseñas con bcrypt
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return done(null, false, { message: 'Invalid username or password' });
      }

      // Devolver el usuario si la contraseña es correcta
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }

  // Definir la estrategia con passport-local
  get use() {
    return PassportUse<LocalStrat, Object, VerifyFunction>(
      'localStr',
      LocalStrat,
      {
        usernameField: 'username', // El campo que se usará para el username
        passwordField: 'password', // El campo que se usará para la password
      },
      this.validate.bind(this) // Asegurar el contexto correcto de "this"
    );
  }
}
