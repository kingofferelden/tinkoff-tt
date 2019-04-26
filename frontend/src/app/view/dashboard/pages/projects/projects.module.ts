import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsComponent} from './projects.component';
import {UiKitModule} from "../../../../shared/ui-kit/ui-kit.module";
import {RouterModule} from "@angular/router";
import {BoardComponent} from './board/board.component';
import {TaskDialogComponent} from './task-dialog/task-dialog.component';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import { TaskViewComponent } from './task-view/task-view.component';

@NgModule({
    declarations: [ProjectsComponent, BoardComponent, TaskDialogComponent, NewTaskDialogComponent, TaskViewComponent],
    entryComponents: [TaskDialogComponent, NewTaskDialogComponent],
    imports: [
        CommonModule,
        UiKitModule,
        RouterModule.forChild([{path: '', component: ProjectsComponent}])
    ]
})
export class ProjectsModule {
}
