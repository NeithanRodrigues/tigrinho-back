import { IsString, IsInt, IsBase64 } from 'class-validator';

export class CreateGameDto {
    @IsString()
    name: string;

    @IsString()
    brand: string; // PG, PP, WG

    @IsBase64()
    image: string; // imagem em base64

    @IsString()
    link: string;

    @IsInt()
    percent1: number;

    @IsInt()
    percent2: number;

    @IsInt()
    percent3: number;
}
