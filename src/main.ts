import { KafkaConsumerService } from '@infra/messaging/kafka/kafka-consumer.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const kafkaConsumserService = app.get(KafkaConsumerService);

  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumserService,
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
