import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'secret-key',
      resave: false,
      saveUninitialized: false,
    }),
  );

  //enable cors
  app.enableCors({
    origin: 'http://localhost:3000',
  });

  app.use(cors());

  await app.listen(3001);
}
bootstrap();
