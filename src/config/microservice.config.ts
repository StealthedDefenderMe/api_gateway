import { Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { MicroServiceName } from "src/common/enum/micro-service.enum";
import { ClientProxyFactory } from "@nestjs/microservices";

@Module({
  providers: [
    ConfigService,
    {
      provide: MicroServiceName.WRITE_SERVICE,
      useFactory: (configService: ConfigService) => {
        const writeServiceOptions = configService.get('writeService');
        return ClientProxyFactory.create(writeServiceOptions);
      },
      inject: [ConfigService]
    }
  ],
  exports: [
    {
      provide: MicroServiceName.WRITE_SERVICE, // Export the provider
      useFactory: (configService: ConfigService) => {
        const writeServiceOptions = configService.get('writeService');
        return ClientProxyFactory.create(writeServiceOptions);
      },
      inject: [ConfigService]
    }
  ]
})
export class MicroServiceGatewayModule {}
