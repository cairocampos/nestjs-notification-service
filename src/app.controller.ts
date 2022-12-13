import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AppService } from './app.service';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.notification.findUnique({
      where: {
        id
      }
    })
  }
  
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body

    return await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        category,
        content,
        recipientId
      }
    })
  }
}
