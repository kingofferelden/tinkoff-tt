import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiImplicitParam } from '@nestjs/swagger';

import { ProjectsService } from "@tinkoff-tt/backend/modules/projects/projects.service";
import { ProjectDto } from "@tinkoff-tt/backend/modules/projects/dto/project.dto";


@Controller('projects')
export class ProjectsController {

    constructor(private projectService: ProjectsService) {
    }

    @Get()
    public async getAllProjects(): Promise<ProjectDto[]> {
        return await this.projectService.getAll();
    }

    @Post()
    public async createProject(@Body() project: ProjectDto): Promise<ProjectDto> {
        return await this.projectService.create(project);
    }

    @Put(':id')
    @ApiImplicitParam({ name: 'id' })
    public async updateProject(@Param('id') id: string, @Body() project: ProjectDto): Promise<ProjectDto> {
        return await this.projectService.update(id, project);
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    public async deleteProject(@Param('id') id: string): Promise<ProjectDto> {
        return await this.projectService.delete(id);
    }
}
