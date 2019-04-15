"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = function (savedEvents, newEvent) {
    var sameMonth = savedEvents.filter(function (event) { return event.month === newEvent.month; });
    var sameDate = sameMonth.filter(function (event) { return event.date === newEvent.date; });
    var earlierEvents = sameDate.filter(function (event) { return event.startTime < newEvent.startTime; });
    var timeConflicts = earlierEvents.filter(function (event) { return event.endTime > newEvent.startTime; });
    var sameStart = sameDate.filter(function (event) { return event.startTime === newEvent.startTime; });
    if (sameStart.length > 1) {
        return sameStart;
    }
    else {
        return timeConflicts;
    }
};
//# sourceMappingURL=eventValidation.js.map