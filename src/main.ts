import { NestFactory } from "@nestjs/core";
import { MainModule } from "./main.module";
import "reflect-metadata";

async function bootstrap() {
    const app = await NestFactory.create(MainModule);
    await app.listen(3000);
}
bootstrap();
