import { IsEmail, IsOptional, IsString, IsEnum, IsInt } from 'class-validator';
import { Roles } from '@prisma/client'; // Asegúrate de que Prisma genere este enum

export class UserDto {
    @IsInt()
    id: number;

    @IsString()
    fullName: string;

    @IsEmail()
    email: string;

    @IsOptional() // Este campo no se expondrá al devolver datos
    password?: string;

    @IsEnum(Roles)
    role: Roles;

    @IsOptional()
    @IsInt()
    companyId?: number;

    @IsOptional()
    profile?: any; // Puedes definir un DTO para Profile si es necesario

    @IsOptional()
    applications?: any[]; // Puedes definir un DTO para Application si es necesario
}

export enum RoleType {
    USER = "USER",
    ADMIN = "ADMIN",
    RECRUITER = "RECRUITER"
}
