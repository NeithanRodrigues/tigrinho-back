import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async insertGame(dto: CreateGameDto) {
    const game = await this.prisma.game.create({
      data: {
        name: dto.name,
        brand: dto.brand,
        image: Buffer.from(dto.image, 'base64'),
        link: dto.link,
        percent1: dto.percent1,
        percent2: dto.percent2,
        percent3: dto.percent3,
      },
    });

    return {
      message: 'Jogo inserido com sucesso',
      game,
    };
  }
}
