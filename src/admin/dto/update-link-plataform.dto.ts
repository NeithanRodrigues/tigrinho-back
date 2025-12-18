import { IsString } from 'class-validator';

export class updatePlataformLinkDto {

    @IsString()
    link: string;

}
