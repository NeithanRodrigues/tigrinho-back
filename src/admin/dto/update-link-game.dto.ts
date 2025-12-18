import { IsString } from 'class-validator';

export class updateGameLinkDto { 

  @IsString()
  link: string;

}
