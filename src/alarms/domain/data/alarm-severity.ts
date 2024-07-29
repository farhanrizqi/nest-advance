export class AlarmSeverity{
    constructor(public value: 'critical'|'high'|'medium'|'low'){}

    /**
     * Checks if the current AlarmSeverity instance is equal to the provided one.
     *
     * @param {AlarmSeverity} severity - The AlarmSeverity instance to compare with.
     * @return {boolean} Returns true if the values of the two instances are equal, false otherwise.
     */
    equals(severity: AlarmSeverity){
        return this.value === severity.value
    }
}