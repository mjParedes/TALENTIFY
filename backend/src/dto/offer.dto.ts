import { IsString, IsInt, IsNotEmpty, IsEnum, IsDate } from "class-validator";
import { Type } from "class-transformer";
<<<<<<< HEAD
import { OfferStatus } from "@prisma/client";
=======
import { PrismaClient } from "@prisma/client"; 
import { OfferStatus } from '../enums/offer.enum'
import { ApplicationStatus } from '../enums/application.enum';  

const prisma = new PrismaClient(); 
>>>>>>> 24f0b16e0a65b6f0ddc2a4a1e3829f3a54b5ff00

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
  ownerId: number;

<<<<<<< HEAD
  @IsString()
  @IsNotEmpty()
  salary: string;
=======
    @IsInt()
    @IsNotEmpty()
    owner: number;
>>>>>>> 24f0b16e0a65b6f0ddc2a4a1e3829f3a54b5ff00

  @IsString()
  @IsNotEmpty()
  requirements: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  modality: string;

  @IsEnum(OfferStatus)
  @IsNotEmpty()
  status: OfferStatus;

<<<<<<< HEAD
  @Type(() => Date)
  @IsDate()
  creationDate: Date;

  constructor(
    id: number, title: string, description: string, ownerId: number, salary: string, requirements: string, location: string, modality: string, status: OfferStatus, creationDate: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.salary = salary;
    this.requirements = requirements;
    this.location = location;
    this.modality = modality;
    this.status = status;
    this.creationDate = creationDate;
  }
=======
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
>>>>>>> 24f0b16e0a65b6f0ddc2a4a1e3829f3a54b5ff00
}
