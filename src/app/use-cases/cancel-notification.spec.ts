import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { faker } from '@faker-js/faker';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

const makeSut = () => {
  const notificationsRepository = new InMemoryNotificationsRepository();
  const cancelNotification = new CancelNotification(notificationsRepository);
  return {
    cancelNotification,
    notificationsRepository,
  };
};

describe('Cancel notification', () => {
  it('should able to cancel a notification', async () => {
    const { cancelNotification, notificationsRepository } = makeSut();

    const notification = new Notification({
      category: 'social',
      content: new Content('teste'),
      recipientId: 'example-recipient-id',
    });
    notificationsRepository.notifications.push(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
  it('should not cancel a non existing notification', () => {
    const { cancelNotification, notificationsRepository } = makeSut();

    jest
      .spyOn(notificationsRepository, 'findById')
      .mockImplementation(async () => null);

    expect(() =>
      cancelNotification.execute({
        notificationId: faker.datatype.uuid(),
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
