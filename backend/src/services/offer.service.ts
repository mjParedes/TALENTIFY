import { PrismaClient } from "@prisma/client";
import { CreateOfferDto } from "../dto/offer.dto";
import { OfferStatus } from '../enums/offer.enum'


const prisma = new PrismaClient()

export class OfferService {

    public async create(createOfferDto: CreateOfferDto) {
        const { title, description, ownerId, salary, requirements, location, modality, status, contractType, workDay, companyName, companyDescription } = createOfferDto

        return prisma.offers.create({
            data: {
                title,
                description,
                owner: {
                    connect: { id: ownerId }
                },
                salary,
                requirements,
                location,
                modality,
                contractType,
                workDay,
                companyName,
                companyDescription,
                status: OfferStatus[status],
            }
        })
    }

    public async getAll() {
        return prisma.offers.findMany()
    }

    public async getById(id: number) {
        return prisma.offers.findUnique({
            where: { id }
        })
    }

    public async update(id: number, updateData: Partial<CreateOfferDto>) {
        const { title, description, ownerId, salary, requirements, location, modality, status, creationDate, applications } = updateData;
    
        return prisma.offers.update({
            where: { id },
            data: {
                title,
                description,
                owner: ownerId ? { connect: { id: ownerId } } : undefined,  // Connect owner by ID if provided
                salary,
                requirements,
                location,
                modality,
                status,
                creationDate: creationDate || new Date(),
                applications: applications
                    ? {
                        upsert: applications.map(app => ({
                            where: { id: app.userId },  // Unique field (id) in the Application model
                            create: { userId: app.userId, status: app.status },
                            update: { status: app.status },
                        }))
                    }
                    : undefined,  // Upsert applications if provided
            }
        });
    }
    

    public async delete(id: number) {
        return prisma.offers.delete({
            where: { id }
        })
    }
}
