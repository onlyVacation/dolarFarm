import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // Importa outros módulos que a aplicação usará
  imports: [],
  // Registra os controladores que lidarão com as requisições HTTP
  controllers: [AppController],
  // Registra os serviços que contêm a lógica de negócio
  providers: [AppService],
})
export class AppModule {}
