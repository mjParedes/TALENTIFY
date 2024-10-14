import { PrismaClient } from "@prisma/client";
import { CreateOfferDto } from "../dto/offer.dto";

const prisma = new PrismaClient()

export class OfferService {

    public async create(createOfferDto: CreateOfferDto) {
        const { title, description, owner, salary, requirements, location, modality, status, creationDate, applicants } = createOfferDto

        return prisma.offers.create({
            data: {
                title,
                description,
                owner,
                salary,
                requirements,
                location,
                modality,
                status,
                creationDate,
                applicants
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
        return prisma.offers.update({
            where: { id },
            data: updateData
        })
    }

    public async delete(id: number) {
        return prisma.offers.delete({
            where: { id }
        })
    }
}
