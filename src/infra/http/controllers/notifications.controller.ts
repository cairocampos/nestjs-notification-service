import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotification } from 'src/app/use-cases/create-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private createNotification: CreateNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.createNotification.execute({
      recipientId,
      category,
      content,
    });

    return {
      notification,
    };
  }
}
