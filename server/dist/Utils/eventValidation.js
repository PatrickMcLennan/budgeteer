"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = function (savedEvents, newEvent) {
    var sameDates = savedEvents.filter(function (event) {
        return event.year === newEvent.year &&
            event.month === newEvent.month &&
            event.date === newEvent.date;
    });
    console.log(sameDates);
    var timeConflicts = sameDates.length >= 1
        ? sameDates.find(function (event) {
            if (event.startTime === newEvent.startTime) {
                return true;
            }
            else if (event.startTime < newEvent.startTime &&
                event.endTime > newEvent.startTime) {
                return true;
            }
            else if (event.endTime > newEvent.startTime &&
                event.startTime < newEvent.startTime) {
                return true;
            }
            else {
                return false;
            }
        })
        : undefined;
    console.log(timeConflicts);
    return timeConflicts;
};
//# sourceMappingURL=eventValidation.js.map