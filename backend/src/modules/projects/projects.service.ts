import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

import { Mapper } from "@tinkoff-tt/backend/core/utils/mapper";
import { TypeSchemas } from "@tinkoff-tt/backend/core/database/schemas";
import { ProjectDto } from "@tinkoff-tt/backend/modules/projects/dto/project.dto";

@Injectable()
export class ProjectsService {

    constructor(@InjectModel(TypeSchemas.PROJECT) private projectRepository: Model<any>) {
    }

    private static mapper<T>(model: T): T {
        return Mapper.toClass(ProjectDto, model);
    }

    public async getAll(): Promise<ProjectDto[]> {
        const model: ProjectDto[] = await this.projectRepository.find().exec();
        return ProjectsService.mapper<ProjectDto[]>(model);
    }

    public async create(project: ProjectDto): Promise<ProjectDto> {
        const model = await this.projectRepository.create(project);
        return ProjectsService.mapper<ProjectDto>(model);
    }

    public async update(id: string, project: ProjectDto): Promise<ProjectDto> {
        const model = await this.projectRepository.update({ _id: id }, project);
        return ProjectsService.mapper<ProjectDto>(model);
    }

    public async delete(id: string): Promise<ProjectDto> {
        const model: ProjectDto = await this.projectRepository.findByIdAndRemove(id);
        return ProjectsService.mapper<ProjectDto>(model);
    }
}
