// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Gemini')
    .setDescription('La API de Gemini para Swagger en NestJS')
    .setVersion('1.0')
    .addTag('Gemini') // Puedes agregar etiquetas para organizar la documentación
    .build();

     // Habilitar CORS para todos los orígenes
  app.enableCors({
    origin: '*', // Permite todos los orígenes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Encabezados permitidos
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      cors: false, // Desactiva CORS en Swagger
    },
  });

  await app.listen(3000);
}
bootstrap();

