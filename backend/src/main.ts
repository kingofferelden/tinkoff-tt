import 'core-js/es7/reflect';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';

import { AppModule } from "@tinkoff-tt/backend/app.module";
import { CONFIG } from "@tinkoff-tt/backend/config/application.properties";

(async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('Tinkoff-TT Swagger')
        .setDescription('The Tinkoff-TT API description')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    app.enableCors();
    await app.listen(CONFIG.app.port, CONFIG.app.host);

})();
