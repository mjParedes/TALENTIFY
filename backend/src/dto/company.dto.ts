import { IsString, IsInt, IsEmail, IsNotEmpty } from "class-validator";

export class CreateCompanyDto {
    @IsInt()
    id: number

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    address: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    category: string

    @IsString()
    website: string

    constructor(
        id: number, name: string, address: string, email: string, category: string, website: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email
        this.category = category;
        this.website = website;
    }

}
