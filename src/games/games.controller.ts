import { Controller, Get, Query } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get()
  async getAll() {
    return this.gamesService.getAll();
  }

  @Get('search')
  async search(@Query('q') q: string) {
    return this.gamesService.search(q);
  }

  @Get('brand/:brand')
async filterByBrand(@Query('brand') brand: string) {
    return this.gamesService.filterByBrand(brand);
  }
}
