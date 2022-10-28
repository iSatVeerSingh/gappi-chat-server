import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const Main = async () => {
  const App = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;
  App.setGlobalPrefix('api');
  try {
    App.listen(PORT);
  } catch (err) {
    throw new Error('Something Went Wrong');
  }
};

Main();
