import { Transport } from "@nestjs/microservices"

export class ConfigService {
    private readonly envConfiure: { [key: string]: any } = null

    constructor() {
        this.envConfiure.gatewayPort = 3000
        
        // WRITE SERVER
        this.envConfiure.writeService = {
            options : {
                port: 3001,
                host: 'localhost'
            },
            transport: Transport.TCP
        }
    }

    get(key: string): any {
        return this.envConfiure[key];
    }
}