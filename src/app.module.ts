import { GeminiController } from './gemini.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    GeminiController
  ],
  providers: [AppService],
})
export class AppModule { }
