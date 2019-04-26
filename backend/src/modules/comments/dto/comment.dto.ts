import { Exclude, Expose } from "class-transformer";
import { ApiModelProperty } from "@nestjs/swagger";
import { Comment } from "@tinkoff-tt/common/models/comment.model";

@Exclude()
export class CommentDto implements Comment {
    @Expose({ name: '_id' })
    @ApiModelProperty()
    public id: string = null;

    @Expose()
    @ApiModelProperty()
    public taskId: string = null;

    @Expose()
    @ApiModelProperty()
    public message: string = null;

    @Expose()
    @ApiModelProperty()
    public createDate: string = null;
}
