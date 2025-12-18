import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';  // ← ADICIONE ESTE IMPORT
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { PlataformsModule } from './plataforms/plataforms.module';

@Module({
  imports: [
    // ⚠️ ADICIONE ISSO PRIMEIRO (é global)
    ConfigModule.forRoot({
      isGlobal: true,      // ← Torna disponível em TODO app
      envFilePath: '.env', // ← Carrega seu arquivo .env
    }),
    
    PrismaModule, 
    GamesModule, 
    AdminModule, PlataformsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}