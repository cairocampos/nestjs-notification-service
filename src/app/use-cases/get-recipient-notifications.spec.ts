import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications ', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    const recipientId = 'example-recipient-id';

    await Promise.all([
      notificationsRepository.create(makeNotification({ recipientId })),
      notificationsRepository.create(makeNotification({ recipientId })),
      notificationsRepository.create(makeNotification({ recipientId })),
      notificationsRepository.create(
        makeNotification({ recipientId: 'another-recipient-id' }),
      ),
    ]);

    const { notifications } = await getRecipientNotifications.execute({
      recipientId,
    });
    expect(notifications).toHaveLength(3);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId }),
        expect.objectContaining({ recipientId }),
        expect.objectContaining({ recipientId }),
      ]),
    );
  });
});
