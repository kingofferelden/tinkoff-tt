import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {TaskType} from "../../../../../../../common/models/task-type.enum";

export interface DropInterface {
    event: CdkDragDrop<any>,
    type: TaskType
}
