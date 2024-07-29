import { AlarmSeverity } from "./data/alarm-severity";

export class Alarm{
    constructor(
        public id: string,
        public name: string,
        public severity: AlarmSeverity
    ) {}
}