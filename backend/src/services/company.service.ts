import { PrismaClient } from "@prisma/client";
import { CreateCompanyDto } from '../dto/company.dto';

const prisma = new PrismaClient()

export class CompanyService {

    public async create(createCompanyDto: CreateCompanyDto) {
        const { name, address, email, category, website } = createCompanyDto

        return prisma.company.create({
            data: {
                name,
                address,
                email,
                category,
                website
            }
        })
    }

    public async getAll() {
        return prisma.company.findMany()
    }

    public async getById(id: number) {
        return prisma.company.findUnique({
            where: { id }
        })
    }

    public async update(id: number, updateData: Partial<CreateCompanyDto>) {
        return prisma.company.update({
            where: { id },
            data: updateData,
        })
    }

    public async delete(id: number) {
        return prisma.company.delete({
            where: { id },
        })
    }

}

