import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiImplicitParam } from '@nestjs/swagger';

import { TasksService } from "@tinkoff-tt/backend/modules/tasks/tasks.service";
import { TaskDto } from "@tinkoff-tt/backend/modules/tasks/dto/task.dto";

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {
    }

    @Get()
    public async getAllTasks(): Promise<TaskDto[]> {
        return this.taskService.getAllTasks();
    }

    @Get('/project/:projectId')
    @ApiImplicitParam({ name: 'projectId' })
    public async getAllTasksByProjectId(@Param('projectId') id: string): Promise<TaskDto[]> {
        return await this.taskService.findByProjectId(id);
    }

    @Post()
    public async createTask(@Body() task: TaskDto): Promise<TaskDto> {
        return await this.taskService.create(task);
    }

    @Put(':id')
    @ApiImplicitParam({ name: 'id' })
    public async updateProject(@Param('id') id: string, @Body() task: TaskDto): Promise<TaskDto> {
        return await this.taskService.update(id, task);
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    public async deleteProject(@Param('id') id: string): Promise<TaskDto> {
        return await this.taskService.delete(id);
    }
}
