import { TaskType } from "./task-type.enum";

export interface Task {
    id?: string;
    projectId: string;
    name: string;
    description: string;
    startDate: string;
    dueDate: string;
    priority: string;
    type: TaskType;
    assigned: string;
    reporter: string;
}
