# nestJsTaskScheduling
Task scheduling (cron job) in nest js 
Installation
To begin using it, we first install the required dependencies.
$ npm install --save @nestjs/schedule

To activate job scheduling, import the ScheduleModule into the root AppModule and run the forRoot() static method as shown below:

app.module.ts

import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
})
export class AppModule {}

