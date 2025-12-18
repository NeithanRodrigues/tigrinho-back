import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  UnauthorizedException,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateGameDto } from "./dto/create-game.dto";
import { CreatePlataformaDto } from "./dto/create-plataforma.dto";

@Controller("admin")
export class AdminController {
  constructor(private adminService: AdminService) { }

  @Patch('update-game-link/:id')
  async updateGameLink(
    @Headers('x-admin-token') token: string,
    @Param('id') id: string,
    @Body() dto: { link: string },
  ) {
    if (!token || token !== process.env.ADMIN_TOKEN) {
      throw new UnauthorizedException('Token inválido');
    }

    return this.adminService.updateGameLink({ link: dto.link }, +id);
  }

  @Post("insert-game")
  async insertGame(
    @Headers("x-admin-token") token: string,
    @Body() dto: CreateGameDto,
  ) {
    if (!token || token.trim() === '') {
      throw new UnauthorizedException("Token ausente");
    }

    const tokenRecebido = token.trim();
    const tokenEsperado = process.env.ADMIN_TOKEN?.trim() || '';

    if (tokenRecebido !== tokenEsperado) {
      console.log('❌ DIFERENÇA DETECTADA:');
      console.log('Recebido:', JSON.stringify(tokenRecebido));
      console.log('Esperado:', JSON.stringify(tokenEsperado));
      throw new UnauthorizedException("Token inválido");
    }

    console.log('✅ TOKEN VÁLIDO! Processando...');
    return this.adminService.insertGame(dto);
  }

  @Post("insert-plataform")
  async insertPlataform(
    @Headers("x-admin-token") token: string,
    @Body () dto: CreatePlataformaDto,
  ) {

    if (!token || token.trim() === '') {
      throw new UnauthorizedException("Token ausente");
    }

    const tokenRecebido = token.trim();
    const tokenEsperado = process.env.ADMIN_TOKEN?.trim() || '';

    if (tokenRecebido !== tokenEsperado) {
      console.log('❌ DIFERENÇA DETECTADA:');
      console.log('Recebido:', JSON.stringify(tokenRecebido));
      console.log('Esperado:', JSON.stringify(tokenEsperado));
      throw new UnauthorizedException("Token inválido");
    }

    console.log('✅ TOKEN VÁLIDO! Processando...');
    return this.adminService.insertPlataform(dto);

  }

  @Patch('update-plataform-link/:name')
  async updatePlataformLink(
    @Headers('x-admin-token') token: string,
    @Param('name') name: string,
    @Body() dto: { link: string },
  ) {
    if (!token || token !== process.env.ADMIN_TOKEN) {
    throw new UnauthorizedException('Token inválido');
    }

  return this.adminService.updatePlataformLink({ link: dto.link }, name);
  }
}