import { PrismaClient } from "@prisma/client";
import { CreateOfferDto } from "../dto/offer.dto";
import { OfferStatus } from '../enums/offer.enum'


const prisma = new PrismaClient()

export class OfferService {

    public async create(createOfferDto: CreateOfferDto) {
        const { title, description, owner, salary, requirements, location, modality, status, creationDate, applicants } = createOfferDto

        return prisma.offers.create({
            data: {
                title,
                description,
                owner: {
                    connect: { id: owner },
                },
                salary,
                requirements,
                location,
                modality,
                status: OfferStatus[status],
                creationDate: new Date(),
                applicants: applicants || "Jack Reynolds, Martin Sheen, Billy Coudrop, Scarlett Johanson",
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

    public async update(id: number, updateData: Omit<Partial<CreateOfferDto>, 'id'>) {
        if (updateData.status) {
            updateData.status = OfferStatus[updateData.status]; 
        }
    
        return prisma.offers.update({
            where: { id },
            data: {
                ...updateData,
                owner: updateData.owner ? { connect: { id: updateData.owner } } : undefined, // Use connect for owner
            },
        });
    }

    public async delete(id: number) {
        return prisma.offers.delete({
            where: { id }
        })
    }
}
