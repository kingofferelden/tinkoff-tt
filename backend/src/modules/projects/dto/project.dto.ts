import { ApiModelProperty } from '@nestjs/swagger';
import { Project } from "@tinkoff-tt/common/models/project.model";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ProjectDto implements Project {

    @Expose({ name: '_id' })
    @ApiModelProperty()
    public id: string = null;

    @Expose()
    @ApiModelProperty()
    public name: string = null;

    @Expose()
    @ApiModelProperty()
    public createDate: string = null;
}
