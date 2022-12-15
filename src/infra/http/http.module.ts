import { Module } from '@nestjs/common';
import { CreateNotification } from 'src/app/use-cases/create-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [CreateNotification],
})
export class HttpModule {}
