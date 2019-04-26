import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from '@nestjs/passport';
import { Module } from "@nestjs/common";

import { UserSchema } from "@tinkoff-tt/backend/core/database/schemas/user.schema";
import { TypeSchemas } from "@tinkoff-tt/backend/core/database/schemas";
import { UsersService } from "@tinkoff-tt/backend/modules/user/user.service";
import { UsersController } from "@tinkoff-tt/backend/modules/user/user.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: TypeSchemas.USER, schema: UserSchema }]),
        PassportModule.register({ defaultStrategy: 'jwt', session: false })
    ],
    exports: [UsersService],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {
}
