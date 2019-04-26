import {Component} from '@angular/core';
import {AddProjectDialogComponent} from "./add-project-dialog/add-project-dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material";
import {ApiProjectService} from "../../../../core/api-project.service";
import {Project} from "../../../../../../../common/models/project.model";
import {StoreService} from "../../../../core/store.service";

@Component({
    selector: 'app-add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

    constructor(private dialog: MatDialog, private api: ApiProjectService, private store: StoreService) {
    }

    openDialog(): void {
        const dialogRef: MatDialogRef<AddProjectDialogComponent, string> = this.dialog.open(AddProjectDialogComponent, {
            width: '300px'
        });

        dialogRef.afterClosed().subscribe((name: string) => {
            if (name) {
                this.api.createProject(name).subscribe((project: Project) => {
                    this.store.updateProjects(project);
                })
            }
        });
    }


}
