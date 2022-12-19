import { CreateNotification } from '@application/use-cases/create-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private createNotification: CreateNotification) {}

  @EventPattern('notifications.send-notification')
  async sendNotification(@Payload() data: SendNotificationPayload) {
    await this.createNotification.execute({
      category: data.category,
      content: data.content,
      recipientId: data.recipientId,
    });
  }
}
