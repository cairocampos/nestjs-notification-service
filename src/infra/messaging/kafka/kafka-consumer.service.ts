import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['causal-colt-14388-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2F1c2FsLWNvbHQtMTQzODgkMONjkEGsCCa5oPCKp1-YZWT5SltlcdPCKUMwrtA',
          password:
            'uTNUoykYStHif_7k0U71XyZJCFUEUcGwelRRb2Yuae1Y11sQv--6ybcPJEMN861y6j4feA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
