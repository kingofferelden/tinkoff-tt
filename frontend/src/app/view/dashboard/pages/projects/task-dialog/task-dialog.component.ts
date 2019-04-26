import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Task } from "../../../../../../../../common/models/task.model";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiTaskService } from "../../../../../core/api-task.service";
import { StoreService } from "../../../../../core/store.service";

@Component({
    selector: 'app-task-dialog',
    templateUrl: './task-dialog.component.html',
    styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent {

    public form: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public task: Task, private apiTasks: ApiTaskService, public dialogRef: MatDialogRef<void>, private fb: FormBuilder, private store: StoreService) {
        this.form = this.fb.group({
            id: task.id,
            projectId: task.projectId,
            name: new FormControl(task.name, [
                Validators.required,
                Validators.minLength(4)
            ]),
            description: new FormControl(task.description, Validators.required),
            startDate: new FormControl(task.startDate, Validators.required),
            dueDate: new FormControl(task.dueDate, Validators.required),
            priority: new FormControl(task.priority, Validators.required),
            type: new FormControl(task.type, Validators.required),
            assigned: new FormControl(task.assigned, Validators.required),
            reporter: new FormControl(task.reporter, Validators.required),
        });
        this.form.disable();
    }

    public deleteTask(id: string) {
        this.apiTasks.deleteTask(id).subscribe(() => {
            this.store.projectsUpdate$.next();
            this.dialogRef.close();
        });
    }

    public updateTask() {
        this.apiTasks.updateTask(this.form.getRawValue()).subscribe(() => {
            this.store.projectsUpdate$.next();
            this.dialogRef.close();
        });
    }

}
