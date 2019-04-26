import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../../../../common/models/project.model";
import {environment} from "../../environments/environment";
import {Task} from "../../../../common/models/task.model";

@Injectable({
    providedIn: 'root'
})
export class ApiProjectService {

    constructor(private http: HttpClient) {
    }

    public getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${environment.host}/projects/`);
    }

    public createProject(name: string): Observable<Project> {
        const body: Project = { name, createDate: new Date().toISOString() };
        return this.http.post<any>(`${environment.host}/projects/`, body);
    }


    public getTasksByProjectId(projectId: string): Observable<Task[]> {
        return this.http.get<any>(`${environment.host}/tasks/project/${projectId}/`);
    }

    public deleteProject(id: string): Observable<void> {
        return this.http.delete<any>(`${environment.host}/projects/${id}`)
    }
}
