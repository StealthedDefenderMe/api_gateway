import { Transport } from "@nestjs/microservices"

export class ConfigService {
    private readonly envConfiure: { [key: string]: any } = {}

    constructor() {
        this.envConfiure.gatewayPort = 3000
        
        // WRITE SERVER
        this.envConfiure.writeService = {
            options : {
                port: 8082,
                host: '0.0.0.0'
            },
            transport: Transport.TCP
        }
    }

    get(key: string): any {
        return this.envConfiure[key];
    }
}