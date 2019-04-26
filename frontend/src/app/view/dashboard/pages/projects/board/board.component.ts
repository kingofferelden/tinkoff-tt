import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../../../../../../common/models/task.model";
import {TaskType} from "../../../../../../../../common/models/task-type.enum";
import {DropInterface} from "../drop.interface";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {MatDialog} from "@angular/material";
import {TaskDialogComponent} from "../task-dialog/task-dialog.component";

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent {
    @Input() public todo: Task[];
    @Input() public inProgress: Task[];
    @Input() public testing: Task[];
    @Input() public done: Task[];
    @Input() public layoutType: string;
    @Output() public dropped: EventEmitter<DropInterface> = new EventEmitter();
    public taskType = TaskType;

    constructor(private dialog: MatDialog) {
    }

    public drop(event: CdkDragDrop<any>, type: TaskType): void {
        this.dropped.emit({event, type});
    }

    public open(item: Task): void {
        const dialog = this.dialog.open(TaskDialogComponent, { data: item }).afterClosed();
        dialog.subscribe((data) => {
            console.log(data);
        });
    }



}
