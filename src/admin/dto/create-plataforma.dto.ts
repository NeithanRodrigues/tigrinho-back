import { IsString } from 'class-validator';

export class CreatePlataformaDto {
  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsString()
  imageName: string;

  @IsString()
  link: string;
}
