import { Controller, Get } from '@nestjs/common';
import { PlataformsService } from './plataforms.service';

@Controller('plataforms')
export class PlataformsController {

    constructor(private plataformsService: PlataformsService) {}

    @Get()
      async getAll() {
        return this.plataformsService.getAll();
      }

}

