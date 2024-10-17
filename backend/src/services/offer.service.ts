import { PrismaClient } from "@prisma/client";
import { CreateOfferDto } from "../dto/offer.dto";
import { OfferStatus } from '../enums/offer.enum'


const prisma = new PrismaClient()

export class OfferService {

    public async create(createOfferDto: CreateOfferDto) {
<<<<<<< HEAD
        const { title, description, ownerId, salary, requirements, location, modality, status, creationDate } = createOfferDto
=======
        const { title, description, owner, salary, requirements, location, modality, status, creationDate, applications } = createOfferDto
>>>>>>> 24f0b16e0a65b6f0ddc2a4a1e3829f3a54b5ff00

        return prisma.offers.create({
            data: {
                title,
                description,
                owner: {
<<<<<<< HEAD
                    connect: { id: ownerId }
=======
                    connect: { id: owner },
>>>>>>> 24f0b16e0a65b6f0ddc2a4a1e3829f3a54b5ff00
                },
                salary,
                requirements,
                location,
                modality,
                status: OfferStatus[status],
                creationDate: new Date(),
<<<<<<< HEAD
=======
                // applicants: applicants || "Jack Reynolds, Martin Sheen, Billy Coudrop, Scarlett Johanson",
                applications: applications
                ? {
                    create: applications.map(app => ({
                        user: { connect: { id: app.userId } },  // Connect user by ID
                        status: app.status,  // Pass the status from ApplicationStatus enum
                    })),
                }
                : undefined,
>>>>>>> 24f0b16e0a65b6f0ddc2a4a1e3829f3a54b5ff00
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
        const { title, description, owner, salary, requirements, location, modality, status, creationDate, applications } = updateData;
    
        return prisma.offers.update({
            where: { id },
            data: {
                title,
                description,
                owner: owner ? { connect: { id: owner } } : undefined,  // Connect owner by ID if provided
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
