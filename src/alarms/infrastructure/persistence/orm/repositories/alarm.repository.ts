import { Injectable } from "@nestjs/common";
import { AlarmEntity } from "../entities/alarm.entity";
import { AlarmRepository } from "src/alarms/application/ports/alarm.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Alarm } from "src/alarms/domain/alarm";

@Injectable()
export class OrmAlarmRepository implements AlarmRepository{
    constructor(
        @InjectRepository(AlarmEntity)
        private readonly alarmRepository: Repository<AlarmEntity>,
    ){}

    async findAll(): Promise<Alarm[]>{
        return this.alarmRepository.find()
    }

    save(alarm: Alarm): Promise<Alarm>{
        return this.alarmRepository.save(alarm)
    }
}