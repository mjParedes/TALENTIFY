import { IsString, IsInt, IsDate, IsNotEmpty, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PrismaClient } from "@prisma/client"; 
import { OfferStatus } from '../enums/offer.enum'
import { ApplicationStatus } from '../enums/application.enum';  

const prisma = new PrismaClient(); 

export class CreateOfferDto {

    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsInt()
    @IsNotEmpty()
    owner: number;

    @IsString()
    @IsNotEmpty()
    salary: string;

    @IsString()
    @IsNotEmpty()
    requirements: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsString()
    @IsNotEmpty()
    modality: string;

    @IsString()
    @IsNotEmpty()
    status: OfferStatus;

    // Transforma strings a Date automáticamente si es necesario
    @Type(() => Date)
    @IsDate()
    creationDate: Date;

    @IsOptional()
    applications: {
        userId: number;
        status: ApplicationStatus;
    }[];  // Array of application data

    constructor(id: number, title: string, description: string, owner: number, salary: string, requirements: string, location: string, modality: string, status: OfferStatus, creationDate: Date, applications: { userId: number, status: ApplicationStatus }[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.owner = owner;
        this.salary = salary;
        this.requirements = requirements;
        this.location = location;
        this.modality = modality;
        this.status = status;
        this.creationDate = creationDate;
        this.applications = applications;
    }
}
