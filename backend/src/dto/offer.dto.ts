import { IsString, IsInt, IsNotEmpty, IsEnum, IsDate } from "class-validator";
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
  ownerId: number;

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

  @IsEnum(OfferStatus)
  @IsNotEmpty()
  status: OfferStatus;

  @Type(() => Date)
  @IsDate()
  creationDate: Date;

//   @IsOptional()
  applications: {
      userId: number;
      status: ApplicationStatus;
  }[]; 

  constructor(
    id: number, title: string, description: string, ownerId: number, salary: string, requirements: string, location: string, modality: string, status: OfferStatus, creationDate: Date, applications: { userId: number, status: ApplicationStatus }[]) {
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
    this.applications = applications;
  }
}
