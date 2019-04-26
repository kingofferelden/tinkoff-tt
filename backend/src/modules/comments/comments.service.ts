import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { TypeSchemas } from "@tinkoff-tt/backend/core/database/schemas";
import { Mapper } from "@tinkoff-tt/backend/core/utils/mapper";
import { CommentDto } from "@tinkoff-tt/backend/modules/comments/dto/comment.dto";

@Injectable()
export class CommentsService {
    constructor(@InjectModel(TypeSchemas.COMMENT) private commentsRepository: Model<any>) {
    }

    private static mapper<T>(model: T): T {
        return Mapper.toClass(CommentDto, model);
    }

    public async getAllComments(): Promise<CommentDto[]> {
        const model: CommentDto[] = await this.commentsRepository.find();
        return CommentsService.mapper(model);
    }

    public async findByTaskId(id: string): Promise<CommentDto[]> {
        const model: CommentDto[] = await this.commentsRepository.find().exec();
        const filtered: CommentDto[] = model.filter((item: CommentDto) => item.taskId === id);
        return CommentsService.mapper(filtered);
    }

    public async create(comment: CommentDto): Promise<CommentDto> {
        const model: CommentDto = await this.commentsRepository.create(comment);
        return CommentsService.mapper<CommentDto>(model);
    }

    public async update(id: string, comment: CommentDto): Promise<CommentDto> {
        const model: CommentDto = await this.commentsRepository.update({ _id: id }, comment);
        return CommentsService.mapper<CommentDto>(model);
    }

    public async delete(id: string): Promise<CommentDto> {
        const model: CommentDto = await this.commentsRepository.findByIdAndRemove(id);
        return CommentsService.mapper<CommentDto>(model);
    }
}
