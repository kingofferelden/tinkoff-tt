import {Injectable} from "@angular/core";
import {Task} from "../../../../common/models/task.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({ providedIn: "root" })
export class ApiTaskService {
    constructor(private http: HttpClient) {}

    public updateTask(task: Task): Observable<Task> {
        return this.http.put<any>(`${environment.host}/tasks/${task.id}/`, task);
    }

    public createTask(task: Task): Observable<Task> {
        return this.http.post<any>(`${environment.host}/tasks/`, task);
    }

    public deleteTask(id: string): Observable<void> {
        return this.http.delete<any>(`${environment.host}/tasks/${id}/`)
    }

}
