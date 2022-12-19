import { CreateNotification } from '@application/use-cases/create-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { NotificationsController } from './kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [KafkaConsumerService, CreateNotification],
})
export class MessagingModule {}
