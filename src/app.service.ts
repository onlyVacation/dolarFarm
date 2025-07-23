import { Injectable } from '@nestjs/common';

@Injectable() // Define que esta classe é um provedor (serviço)
export class AppService {
  getHello(): string {
    return 'Bem-vindo!';
  }
}
