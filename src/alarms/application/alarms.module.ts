import { Module } from '@nestjs/common';
import { AlarmsService } from './alarms.service';
import { AlarmsController } from '../interfaces/Http/alarms.controller';
import { AlarmFactory } from '../domain/factories/alarm.factory';

@Module({
  controllers: [AlarmsController],
  providers: [AlarmsService, AlarmFactory],
})
export class AlarmsModule {}
