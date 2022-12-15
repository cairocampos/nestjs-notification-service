import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface CreateNotificationData {
  recipientId: string;
  content: string;
  category: string;
}

interface CreateNotificationResponse {
  notification: Notification;
}

@Injectable()
export class CreateNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    body: CreateNotificationData,
  ): Promise<CreateNotificationResponse> {
    const { recipientId, category, content } = body;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
