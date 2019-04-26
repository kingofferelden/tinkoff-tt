import {BehaviorSubject, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {Project} from "../../../../common/models/project.model";

@Injectable({ providedIn: 'root' })
export class StoreService {
    public project$: BehaviorSubject<Project[]> = new BehaviorSubject([]);
    public projectsUpdate$: Subject<void> = new Subject();
    public jwt$: BehaviorSubject<string> = new BehaviorSubject(localStorage.getItem('jwt'));

    public addProjects(projects: Project[]): void {
       this.project$.next(projects);
    }

    public updateProjects(project: Project): void {
        const oldProjects: Project[] = this.project$.getValue();
        this.project$.next([ ...oldProjects, project ])
    }

    public deleteProject(id: string): void {
        const oldProjects: Project[] = this.project$.getValue();
        const newProjects: Project[] = oldProjects.filter((item) => item.id !== id);
        this.project$.next(newProjects)
    }
}
