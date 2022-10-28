import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { globalValidation } from './helpers/globalValidationError';

const Main = async () => {
  const App = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;
  App.setGlobalPrefix('api');
  App.useGlobalPipes(new ValidationPipe(globalValidation));

  try {
    App.listen(PORT);
  } catch (err) {
    throw new Error('Something Went Wrong');
  }
};

Main();
