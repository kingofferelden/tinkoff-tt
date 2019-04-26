import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from "@tinkoff-tt/common/models/user.model";
import { TypeSchemas } from "@tinkoff-tt/backend/core/database/schemas";
import { UserDto } from "@tinkoff-tt/backend/modules/user/dto/user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(TypeSchemas.USER) private userModel: Model<User | any>) {
    }

    public async create(user: UserDto): Promise<User> {
        let createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    public async findOneByEmail(email): Promise<User> {
        return await this.userModel.findOne({ email: email });
    }

}
