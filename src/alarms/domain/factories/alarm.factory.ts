import { Injectable } from "@nestjs/common";
import { AlarmSeverity } from "../data/alarm-severity";
import { Alarm } from "../alarm";
import { randomUUID } from "crypto";

@Injectable()
export class AlarmFactory {
    private AlarmSeverity: typeof AlarmSeverity; // Declare the variable here

    constructor() {
        this.AlarmSeverity = AlarmSeverity; // Initialize it with the imported value
    }

    create(name: string, severity: string){
        const alarmId = randomUUID();
        const alarmSeverity = new AlarmSeverity(severity as AlarmSeverity['value'])
        return new Alarm(alarmId, name, alarmSeverity)
    }
}