import { faker } from '@faker-js/faker';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { UnreadNotification } from './unread-notification';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      id: notification.id,
    });
    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not read a non existing notification', () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new UnreadNotification(notificationsRepository);

    jest
      .spyOn(notificationsRepository, 'findById')
      .mockImplementation(async () => null);

    expect(() =>
      readNotification.execute({
        id: faker.datatype.uuid(),
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
