import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [PrismaModule, GamesModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
