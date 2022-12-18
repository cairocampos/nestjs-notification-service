import { faker } from '@faker-js/faker';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CreateNotification } from './create-notification';

describe('Create notification', () => {
  it('should be able to create a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const createNotification = new CreateNotification(notificationsRepository);

    const { notification } = await createNotification.execute({
      content: faker.datatype.string(10),
      category: faker.datatype.string(10),
      recipientId: faker.datatype.string(10),
    });
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
