import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import { ProjectSchemas } from "@tinkoff-tt/backend/core/database/schemas/project.schema";
import { TypeSchemas } from "@tinkoff-tt/backend/core/database/schemas";
import { ProjectsController } from "@tinkoff-tt/backend/modules/projects/projects.controller";
import { ProjectsService } from "@tinkoff-tt/backend/modules/projects/projects.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: TypeSchemas.PROJECT, schema: ProjectSchemas }])],
    controllers: [ProjectsController],
    providers: [ProjectsService]
})
export class ProjectsModule {
}
