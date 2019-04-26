import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-task-view',
    templateUrl: './task-view.component.html',
    styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {
    @Input() public form: FormGroup;
    @Input() public title: string;
    @Input() public isEditable: boolean;
    @Input() public canSave: boolean;
    @Output() public delete: EventEmitter<string | any> = new EventEmitter();
    @Output() public save: EventEmitter<void> = new EventEmitter();

    public setEditableMode() {
        this.canSave = true;
        this.form.enable();
    }
}
