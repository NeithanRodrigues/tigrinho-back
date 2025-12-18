import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesService {
  private cache = new Map<number, { p1: number; p2: number; p3: number; expires: number }>();

  constructor(private prisma: PrismaService) {}

  private generatePercentages(gameId: number) {
    const now = Date.now();

    const cached = this.cache.get(gameId);
    if (cached && cached.expires > now) {
      return cached;
    }

    const p1 = Math.floor(Math.random() * 100);
    const p2 = Math.floor(Math.random() * 100);
    const p3 = Math.floor(Math.random() * 100);

    const expires = now + 5 * 60 * 1000; 

    this.cache.set(gameId, { p1, p2, p3, expires });

    return { p1, p2, p3 };
  }

  async getAll() {
    const games = await this.prisma.game.findMany();

    return games.map(game => {
      const perc = this.generatePercentages(game.id);
      return { ...game, percent1: perc.p1, percent2: perc.p2, percent3: perc.p3 };
    });
  }

  async search(term: string) {
    const games = await this.prisma.game.findMany({
      where: {
        name: { contains: term, mode: 'insensitive' },
      },
    });

    return games.map(game => {
      const perc = this.generatePercentages(game.id);
      return { ...game, percent1: perc.p1, percent2: perc.p2, percent3: perc.p3 };
    });
  }

  async filterByBrand(brand: string) {
    const games = await this.prisma.game.findMany({
      where: { brand },
    });

    return games.map(game => {
      const perc = this.generatePercentages(game.id);
      return { ...game, percent1: perc.p1, percent2: perc.p2, percent3: perc.p3 };
    });
  }
}
