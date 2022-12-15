import { faker } from '@faker-js/faker';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a new notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      category: 'social',
      content: new Content(faker.datatype.string(10)),
    });

    expect(notification).toBeTruthy();
  });
});
