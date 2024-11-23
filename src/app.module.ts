import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './Modules/users/users.module';
import { SystemModule } from './Modules/system/system.module';

@Module({
  imports: [UsersModule, SystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
