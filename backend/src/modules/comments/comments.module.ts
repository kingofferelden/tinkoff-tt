import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { TypeSchemas } from "@tinkoff-tt/backend/core/database/schemas";
import { CommentSchema } from "@tinkoff-tt/backend/core/database/schemas/comment.schema";
import { CommentsController } from "@tinkoff-tt/backend/modules/comments/comments.controller";
import { CommentsService } from "@tinkoff-tt/backend/modules/comments/comments.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: TypeSchemas.COMMENT, schema: CommentSchema }])],
    controllers: [CommentsController],
    providers: [CommentsService]
})
export class CommentsModule {
}
