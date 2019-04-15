"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = function (savedEvents, newEvent) {
    var sameDate = savedEvents.filter(function (event) { return event.date === newEvent.date; });
    var sameStart = sameDate.filter(function (event) { return event.startTime === newEvent.startTime; });
    var earlierEvents = sameDate.filter(function (event) { return event.startTime < newEvent.startTime; });
    var timeConflicts = earlierEvents.filter(function (event) { return event.endTime > newEvent.startTime; });
    if (sameDate.length === 0) {
        return sameDate;
    }
    else if (sameStart.length !== 0) {
        return sameStart;
    }
    else {
        return timeConflicts;
    }
};
//# sourceMappingURL=eventValidation.js.map