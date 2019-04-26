import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiImplicitParam } from "@nestjs/swagger";

import { CommentsService } from "@tinkoff-tt/backend/modules/comments/comments.service";
import { CommentDto } from "@tinkoff-tt/backend/modules/comments/dto/comment.dto";


@Controller('comments')
export class CommentsController {

    constructor(private commentsService: CommentsService) {
    }

    @Get()
    public async getAllComments(): Promise<CommentDto[]> {
        return this.commentsService.getAllComments();
    }

    @Get('/task/:taskId')
    @ApiImplicitParam({ name: 'taskId' })
    public async getAllCommentsByTaskId(@Param('taskId') id: string): Promise<CommentDto[]> {
        return await this.commentsService.findByTaskId(id);
    }

    @Post()
    public async createTask(@Body() comment: CommentDto): Promise<CommentDto> {
        return await this.commentsService.create(comment);
    }

    @Put(':id')
    @ApiImplicitParam({ name: 'id' })
    public async updateComment(@Param('id') id: string, @Body() comment: CommentDto): Promise<CommentDto> {
        return await this.commentsService.update(id, comment);
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    public async deleteProject(@Param('id') id: string): Promise<CommentDto> {
        return await this.commentsService.delete(id);
    }

}
