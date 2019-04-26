import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { UsersService } from "@tinkoff-tt/backend/modules/user/user.service";
import { UserDto } from "@tinkoff-tt/backend/modules/user/dto/user.dto";
import { User } from "@tinkoff-tt/common/models/user.model";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @Post()
    public async create(@Body() user: UserDto): Promise<User> {
        return await this.usersService.create(user);
    }

    @Get('test')
    @UseGuards(AuthGuard())
    public async testAuthRoute(): Promise<any> {
        return {
            message: 'You did it!'
        }
    }

}
