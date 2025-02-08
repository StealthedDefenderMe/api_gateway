import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {bufferLogs: true});
  
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000']
  })

  const PORT = new ConfigService().get('gatewayPort');
  await app.listen(PORT)
  console.log(`A P I   G A T E W A Y   I S   R U N N I N G   O N   P O R T : ${PORT}   STARTED AT ${new Date()}`)
}
bootstrap();
