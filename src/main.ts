import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {bufferLogs: true});
  
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000']
  })

  const PORT = new ConfigService().get('getawayPort');
  await app.listen(PORT)
  console.log(`API GATEWAY IS RUNNING ON PORT : ${PORT}   STARTED AT ${new Date()}`)
}
bootstrap();
