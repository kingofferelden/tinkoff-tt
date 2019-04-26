import { Exclude, Expose } from "class-transformer";
import { ApiModelProperty } from "@nestjs/swagger";

import { Task } from "@tinkoff-tt/common/models/task.model";
import { TaskType } from "@tinkoff-tt/common/models/task-type.enum";

@Exclude()
export class TaskDto implements Task {

    @Expose({ name: '_id' })
    @ApiModelProperty()
    public id: string = null;

    @Expose()
    @ApiModelProperty()
    public projectId: string = null;

    @Expose()
    @ApiModelProperty()
    public name: string = null;

    @Expose()
    @ApiModelProperty()
    public type: TaskType = null;

    @Expose()
    @ApiModelProperty()
    public createDate: string = null;

    @Expose()
    @ApiModelProperty()
    public description: string = null;

    @Expose()
    @ApiModelProperty()
    public startDate: string = null;

    @Expose()
    @ApiModelProperty()
    public dueDate: string = null;

    @Expose()
    @ApiModelProperty()
    public priority: string = null;

    @Expose()
    @ApiModelProperty()
    public tag: string = null;

    @Expose()
    @ApiModelProperty()
    public assigned: string = null;

    @Expose()
    @ApiModelProperty()
    public reporter: string = null;
}
