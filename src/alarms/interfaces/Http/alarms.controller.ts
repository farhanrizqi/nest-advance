import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlarmsService } from '../../application/alarms.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { CreateAlarmCommand } from 'src/alarms/application/commands/create-alarm.command';
// import { UpdateAlarmDto } from '../../dto/update-alarm.dto';

@Controller('alarms')
export class AlarmsController {
  constructor(
    private readonly alarmsService: AlarmsService,
  ) {}

  @Post()
  create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmsService.create(
      new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.severity)
    );
  }

  @Get()
  findAll() {
    return this.alarmsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.alarmsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAlarmDto: UpdateAlarmDto) {
  //   return this.alarmsService.update(+id, updateAlarmDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.alarmsService.remove(+id);
  // }
}
