import { Body, Controller, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/common/dto/user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @Post('create-user')
    async createUser(@Res() res: Response, @Body() dto: UserDto){
        console.log("DTO AT CONTROLLER----", dto)
        return this.userService.createUserService(dto)
    }

}
