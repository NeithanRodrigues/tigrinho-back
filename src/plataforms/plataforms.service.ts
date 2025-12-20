import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlataformsService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
    const plataformas = await this.prisma.plataformas.findMany();

    return plataformas.map(plataforma => {
      return { ...plataforma };
    });
  }
}   

