import { IsString, IsInt, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateCompanyDto {
    @IsInt()
    id: number

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    address: string

    @IsString()
<<<<<<< HEAD
    @IsNotEmpty()
    country: string
=======
    country: string;
>>>>>>> 24f0b16e0a65b6f0ddc2a4a1e3829f3a54b5ff00

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    category: string

    @IsString()
    website: string

    @IsOptional()
    imageUrl: string

    constructor(
<<<<<<< HEAD
        id: number, name: string, address: string, country: string, email: string, category: string, website: string,imageUrl:string) {
=======
        id: number, name: string, address: string, country: string, email: string, category: string, website: string) {
>>>>>>> 24f0b16e0a65b6f0ddc2a4a1e3829f3a54b5ff00
        this.id = id;
        this.name = name;
        this.address = address;
        this.country = country;
        this.email = email
        this.category = category;
        this.website = website;
        this.imageUrl = imageUrl;
    }

}
