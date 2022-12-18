import { NotificationsModule } from '@infra/modules/notifications.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [NotificationsModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
