import {Component, OnInit} from '@angular/core';
import {ApiProjectService} from "./core/api-project.service";
import {StoreService} from "./core/store.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private projectsService: ApiProjectService, private store: StoreService) {
    }


    public ngOnInit() {
        this.projectsService.getProjects().subscribe(data => {
            this.store.addProjects(data);
        })
    }
}
