import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { CreatePlataformaDto } from './dto/create-plataforma.dto';
import { updateGameLinkDto } from './dto/update-link-game.dto';
import { updatePlataformLinkDto } from './dto/update-link-plataform.dto';


@Injectable()
export class AdminService {
  async updateGameLink(dto: updateGameLinkDto, id: number) {


    const game = await this.prisma.game.update({
      where: { id },
      data: {
        link: dto.link,
      },
    });

    return {
      message: `Link atualizado para ${game.link}`,
      data: { id, link: game.link },
    };
  }
  constructor(private prisma: PrismaService) { }

  async insertGame(dto: CreateGameDto) {
    const game = await this.prisma.game.create({
      data: {
        name: dto.name,
        brand: dto.brand,
        imageName: dto.imageName,
        link: dto.link,
      },
    });

    return {
      message: 'Jogo inserido com sucesso',
      game,
    };
  }

  async insertPlataform(dto: CreatePlataformaDto) {
    const plataforma = await this.prisma.plataformas.create({
      data: {
        name: dto.name,
        brand: dto.brand,
        imageName: dto.imageName,
        link: dto.link,
      }
    });
    return {
      message: 'Plataforma inserida com sucesso',
      plataforma,
    };

  }

  async updatePlataformLink(dto: updatePlataformLinkDto, name: string) {
    const plataformas = await this.prisma.plataformas.update({
      where: { name },
      data: {
        link: dto.link,
      },
    });

    return {
      message: `Link atualizado para ${plataformas.link}`,
      data: { name: plataformas.name, link: plataformas.link },
    };
  }

}
