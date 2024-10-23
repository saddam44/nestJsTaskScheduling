import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
@Injectable()
export class MyCronService implements OnModuleInit {
  constructor(private readonly emailService: EmailService) {} // Inject MailService
  async onModuleInit(): Promise<void> {
    // Optional initialization code
  }

  @Cron('*/10 * * * *') // This cron expression means "every minute"
  async handleCron() {
    console.log('Cron job executed every 10 minute');
  }
}
