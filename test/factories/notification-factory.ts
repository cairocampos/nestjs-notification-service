import { faker } from '@faker-js/faker';
import { Content } from '../../src/app/entities/content';
import { Notification } from '../../src/app/entities/notification';
import { NotificationProps } from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export const makeNotification = (override: Override = {}) => {
  return new Notification({
    category: 'social',
    content: new Content(faker.datatype.string(15)),
    recipientId: 'example-recipient-id',
    ...override,
  });
};
