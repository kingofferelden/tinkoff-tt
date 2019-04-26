import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '@tinkoff-tt/backend/modules/auth/auth.service';
import { UserDto } from "@tinkoff-tt/backend/modules/user/dto/user.dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post()
    public async login(@Body() user: UserDto) {
        return await this.authService.validateUserByPassword(user);
    }

}
