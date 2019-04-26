import { Component, ViewEncapsulation } from '@angular/core';
import { StoreService } from "../../../../core/store.service";
import { ApiTaskService } from "../../../../core/api-task.service";
import { ApiProjectService } from "../../../../core/api-project.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
    constructor(public store: StoreService, private apiProjects: ApiProjectService, private router: Router) {
    }

    public deleteProject(id: string) {
        this.apiProjects.deleteProject(id).subscribe(() => {
            this.store.deleteProject(id);
        })
    }

    public logout() {
        this.router.navigate(['auth']).then(() => {
            localStorage.removeItem('jwt');
            this.store.jwt$.next(null);
        });
    }

}
