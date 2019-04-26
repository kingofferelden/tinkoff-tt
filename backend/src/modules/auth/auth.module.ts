import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";

import { CONFIG } from "@tinkoff-tt/backend/config/application.properties";
import { UsersModule } from "@tinkoff-tt/backend/modules/user/user.module";
import { AuthService } from "@tinkoff-tt/backend/modules/auth/auth.service";
import { JwtStrategy } from "@tinkoff-tt/backend/modules/auth/jwt.strategy";
import { AuthController } from "@tinkoff-tt/backend/modules/auth/auth.controller";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt', session: false }),
        JwtModule.register({
            secretOrPrivateKey: CONFIG.secretKey,
            signOptions: {
                expiresIn: 3600
            }
        }),
        UsersModule
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
