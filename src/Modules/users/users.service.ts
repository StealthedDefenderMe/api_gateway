import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessagePatterUsersModule, MicroServiceName } from 'src/common/enum/micro-service.enum';

@Injectable()
export class UsersService {

    constructor(
        @Inject(MicroServiceName.WRITE_SERVICE) private readonly writeServiceClient: ClientProxy
    ){}

    // Function to create user - POST
    async createUserService(payload: any){
        console.log("Payload received at PAI GATEWAY user service---------", payload)
        return this.writeServiceClient.send(MessagePatterUsersModule.CREATE_USER, payload);
    }

}
