import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const Main = async () => {
  const App = await NestFactory.create(AppModule);

  try {
    App.listen(8000);
  } catch (err) {
    throw new Error('Something Went Wrong');
  }
};

Main();
