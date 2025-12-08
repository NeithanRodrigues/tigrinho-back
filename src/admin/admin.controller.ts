import {
  Body,
  Controller,
  Headers,
  Post,
  UnauthorizedException,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateGameDto } from "./dto/create-game.dto";

@Controller("admin")
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post("insert-game")
  async insertGame(
    @Headers("x-admin-token") token: string,
    @Body() dto: CreateGameDto,
  ) {
    if (!token || token !== process.env.ADMIN_TOKEN) {
      throw new UnauthorizedException("Token inválido ou ausente");
    }

    return this.adminService.insertGame(dto);
  }
}
