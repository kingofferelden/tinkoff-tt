import { Exclude, Expose } from "class-transformer";
import { ApiModelProperty } from "@nestjs/swagger";
import { User } from "@tinkoff-tt/common/models/user.model";

@Exclude()
export class UserDto implements User {
    @Expose()
    @ApiModelProperty()
    public email: string;

    @Expose()
    @ApiModelProperty()
    public  password: string;
}
