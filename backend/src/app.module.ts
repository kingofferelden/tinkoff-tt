import { Module } from '@nestjs/common';

import { AppController } from '@tinkoff-tt/backend/app.controller';
import { DatabaseModule } from "@tinkoff-tt/backend/core/database/database.module";
import { ProjectsModule } from "@tinkoff-tt/backend/modules/projects/projects.module";
import { TasksModule } from "@tinkoff-tt/backend/modules/tasks/tasks.module";
import { CommentsModule } from "@tinkoff-tt/backend/modules/comments/comments.module";
import { UsersModule } from "@tinkoff-tt/backend/modules/user/user.module";
import { AuthModule } from "@tinkoff-tt/backend/modules/auth/auth.module";

@Module({
    imports: [
        DatabaseModule,
        ProjectsModule,
        TasksModule,
        CommentsModule,
        UsersModule,
        AuthModule
    ],
    controllers: [AppController]
})
export class AppModule {
}
