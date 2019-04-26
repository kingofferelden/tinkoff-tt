import {Component, OnInit} from '@angular/core';
import {moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ApiProjectService} from "../../../../core/api-project.service";
import {Task} from "../../../../../../../common/models/task.model";
import {filter} from "rxjs/operators";
import {TaskType} from "../../../../../../../common/models/task-type.enum";
import {ApiTaskService} from "../../../../core/api-task.service";
import {DropInterface} from "./drop.interface";
import {fadeIn} from "../../../../shared/animation/fade-in";
import {MatDialog} from "@angular/material";
import {NewTaskDialogComponent} from "./new-task-dialog/new-task-dialog.component";
import {StoreService} from "../../../../core/store.service";


@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    animations: [fadeIn]
})
export class ProjectsComponent implements OnInit {
    public projectId: string;
    public name: string;
    public todo: Task[] = [];
    public inProgress: Task[] = [];
    public testing: Task[] = [];
    public done: Task[] = [];
    private checked: boolean = true;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private apiProjects: ApiProjectService,
                private apiTasks: ApiTaskService,
                private dialog: MatDialog,
                private store: StoreService) {
    }

    public ngOnInit(): void {
        this.getTasksByProjectId();

        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => this.getTasksByProjectId());

        this.store.projectsUpdate$.subscribe(() => {
            console.log('update page');
            this.getTasksByProjectId();
        })

    }

    public onDrop($event: DropInterface): void {
        const {event, type} = $event;

        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }

        const task: Task = event.item.data;
        task.type = type;

        this.apiTasks.updateTask(task).subscribe((data) => {
            this.getTasksByProjectId();
        });
    }

    public createTask(): void {
       const newTask = this.dialog.open(NewTaskDialogComponent, {data: this.projectId}).afterClosed();
       newTask.subscribe(data => {
           if (data) {
               this.apiTasks.createTask(data).subscribe(() => this.getTasksByProjectId());
           }
       });
    }

    private getTasksByProjectId(): void {
        this.projectId = this.route.snapshot.params['projectId'];
        this.name = this.route.snapshot.params['name'];
        this.apiProjects.getTasksByProjectId(this.projectId).subscribe((tasks: Task[]) => {
            this.todo = tasks.filter(task => task.type === TaskType.TODO);
            this.inProgress = tasks.filter(task => task.type === TaskType.IN_PROGRESS);
            this.testing = tasks.filter(task => task.type === TaskType.TESTING);
            this.done = tasks.filter(task => task.type === TaskType.DONE);
        });
    }

}
