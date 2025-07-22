import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Cria uma instância da aplicação NestJS
  const app = await NestFactory.create(AppModule);

  // Inicia o servidor na porta 3000
  await app.listen(3000);
  console.log(`Aplicação NestJS rodando em: ${await app.getUrl()}`);
}
bootstrap();
