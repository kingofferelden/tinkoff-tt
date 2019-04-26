import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import { TaskSchema } from "@tinkoff-tt/backend/core/database/schemas/task.schema";
import { TypeSchemas } from "@tinkoff-tt/backend/core/database/schemas";
import { TasksService } from "@tinkoff-tt/backend/modules/tasks/tasks.service";
import { TasksController } from "@tinkoff-tt/backend/modules/tasks/tasks.controller";

@Module({
    imports: [MongooseModule.forFeature([{ name: TypeSchemas.TASK, schema: TaskSchema }])],
    providers: [TasksService],
    controllers: [TasksController]
})
export class TasksModule {
}
