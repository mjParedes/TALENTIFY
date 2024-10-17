import { PrismaClient } from "@prisma/client";
import { CreateCompanyDto } from '../dto/company.dto';
import { cloudinaryHandler } from "../utils/cloudinary.use";

const prisma = new PrismaClient()

export class CompanyService {

    public async create(createCompanyDto: CreateCompanyDto) {
<<<<<<< HEAD
        const { name, address, country, email, category, website, imageUrl } = createCompanyDto

        const imageUpload = await this.uploadImage(imageUrl)
=======
        const { name, address, email, category, website, country } = createCompanyDto
>>>>>>> 24f0b16e0a65b6f0ddc2a4a1e3829f3a54b5ff00

        return prisma.company.create({
            data: {
                name,
                address,
                country,
                email,
                category,
                website,
<<<<<<< HEAD
                imageUrl: imageUpload
=======
                country
>>>>>>> 24f0b16e0a65b6f0ddc2a4a1e3829f3a54b5ff00
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

    private async uploadImage(image: string): Promise<string> {
        try {
            const imageUpload = await cloudinaryHandler(image)
            return imageUpload
        } catch (error: any) {
            throw new Error(`Error al subir imagen: ${error.message}`)
        }
    }

}

