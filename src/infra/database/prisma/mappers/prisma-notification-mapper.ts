import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Notification as PrismaNotification } from 'prisma/prisma-client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(notification: PrismaNotification) {
    return new Notification(
      {
        content: new Content(notification.content),
        category: notification.category,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
        canceledAt: notification.canceledAt,
      },
      notification.id,
    );
  }
}
