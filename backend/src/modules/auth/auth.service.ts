import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';

import { UsersService } from "@tinkoff-tt/backend/modules/user/user.service";
import { UserDto } from "@tinkoff-tt/backend/modules/user/dto/user.dto";
import { JwtPayload, JwtResponse } from "@tinkoff-tt/backend/modules/auth/auth.interfaces";
import { User } from "@tinkoff-tt/common/models/user.model";

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService) {
    }

    public async validateUserByPassword(user: UserDto): Promise<JwtResponse> {
        let userToAttempt: any = await this.usersService.findOneByEmail(user.email);
        return new Promise((resolve, reject) => {

            if (userToAttempt) {
                userToAttempt.checkPassword(user.password, (err, isMatch) => {
                    if (err) reject(new UnauthorizedException());
                    if (isMatch) {
                        resolve(this.createJwtPayload(userToAttempt));
                    } else {
                        reject(new UnauthorizedException());
                    }
                });
            } else {
                reject(new UnauthorizedException());
            }


        });
    }

    public async validateUserByJwt(payload: JwtPayload): Promise<JwtResponse> {
        let user: User = await this.usersService.findOneByEmail(payload.email);
        if (user) {
            return this.createJwtPayload(user);
        } else {
            throw new UnauthorizedException();
        }
    }

    private createJwtPayload(user: User): JwtResponse {
        let data: JwtPayload = { email: user.email };
        let jwt = this.jwtService.sign(data);
        return { expiresIn: 3600, token: jwt }
    }

}
