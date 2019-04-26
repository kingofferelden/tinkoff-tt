import {Component, HostListener} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
    selector: 'app-add-project-dialog',
    templateUrl: './add-project-dialog.component.html',
    styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent {
    public name: string = '';

    constructor(public dialogRef: MatDialogRef<any>) { }

    @HostListener('document:keydown.escape')
    public close(): void {
        this.dialogRef.close();
    }

    public save(): void {
        this.dialogRef.close(this.name);
    }
}
