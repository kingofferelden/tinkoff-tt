import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { CONFIG } from "@tinkoff-tt/backend/config/application.properties";

@Module({
    imports: [
        MongooseModule.forRoot(CONFIG.database.mongoURI, { useNewUrlParser: true })
    ]
})
export class DatabaseModule {
}
