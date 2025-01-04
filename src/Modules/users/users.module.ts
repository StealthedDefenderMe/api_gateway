import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MicroServiceGatewayModule } from 'src/config/microservice.config';

@Module({
  imports: [MicroServiceGatewayModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
