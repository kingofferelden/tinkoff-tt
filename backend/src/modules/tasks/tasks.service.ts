import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { TypeSchemas } from "@tinkoff-tt/backend/core/database/schemas";
import { Mapper } from "@tinkoff-tt/backend/core/utils/mapper";
import { TaskDto } from "@tinkoff-tt/backend/modules/tasks/dto/task.dto";

@Injectable()
export class TasksService {
    constructor(@InjectModel(TypeSchemas.TASK) private taskRepository: Model<any>) {
    }

    private static mapper<T>(model: T): T {
        return Mapper.toClass(TaskDto, model);
    }

    public async getAllTasks(): Promise<TaskDto[]> {
        const model: TaskDto[] = await this.taskRepository.find().exec();
        return TasksService.mapper<TaskDto[]>(model);
    }

    public async findByProjectId(projectId: string): Promise<TaskDto[]> {
        const model: TaskDto[] = await this.taskRepository.find().exec();
        const filtered: TaskDto[] = model.filter((item: TaskDto) => item.projectId === projectId);
        return TasksService.mapper<TaskDto[]>(filtered);
    }

    public async create(task: TaskDto): Promise<TaskDto> {
        const model: TaskDto = await this.taskRepository.create(task);
        return TasksService.mapper<TaskDto>(model);
    }

    public async update(id: string, task: TaskDto): Promise<TaskDto> {
        const model: TaskDto = await this.taskRepository.update({ _id: id }, task);
        return TasksService.mapper<TaskDto>(model);
    }

    public async delete(id: string): Promise<TaskDto> {
        const model: TaskDto = await this.taskRepository.findByIdAndRemove(id);
        return TasksService.mapper<TaskDto>(model);
    }

}
