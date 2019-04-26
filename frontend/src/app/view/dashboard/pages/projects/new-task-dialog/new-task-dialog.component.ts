import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Task } from "../../../../../../../../common/models/task.model";
import { TaskType } from "../../../../../../../../common/models/task-type.enum";


@Component({
    selector: 'app-new-task-dialog',
    templateUrl: './new-task-dialog.component.html',
    styleUrls: ['./new-task-dialog.component.css']
})
export class NewTaskDialogComponent {
    public form: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public projectId: string, public dialogRef: MatDialogRef<Task>, private fb: FormBuilder) {
        this.form = this.fb.group({
            projectId: projectId,
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ]),
            description: new FormControl('', Validators.required),
            startDate: new FormControl(new Date(), Validators.required),
            dueDate: new FormControl('', Validators.required),
            priority: new FormControl('Low', Validators.required),
            type: new FormControl(TaskType.TODO, Validators.required),
            assigned: new FormControl('', Validators.required),
            reporter: new FormControl('', Validators.required)
        })
    }

    public createTask() {
        this.dialogRef.close(this.form.getRawValue());
    }


}
