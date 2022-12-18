import { makeNotification } from '@test/factories/notification-factory';

describe('Notification', () => {
  it('should be able to create a new notification', () => {
    const notification = makeNotification();

    expect(notification).toBeTruthy();
  });
});
