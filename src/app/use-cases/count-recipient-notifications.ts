import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

interface CountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    body: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const count = await this.notificationsRepository.countManyByRecipientId(
      body.recipientId,
    );

    return {
      count,
    };
  }
}
