import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Define que esta classe é um controlador
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Define uma rota GET para o caminho raiz (/)
  getHello(): string {
    // Chama um método do serviço para obter a resposta
    return this.appService.getHello();
  }
}
