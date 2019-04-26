import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from "@tinkoff-tt/backend/modules/auth/auth.service";
import { JwtPayload } from "@tinkoff-tt/backend/modules/auth/auth.interfaces";
import { CONFIG } from "@tinkoff-tt/backend/config/application.properties";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: CONFIG.secretKey
        });
    }

    public async validate(payload: JwtPayload): Promise<any> {
        const user = await this.authService.validateUserByJwt(payload);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

}
