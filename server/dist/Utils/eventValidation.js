"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = function (savedEvents, newEvent) {
    var sameDate = savedEvents.filter(function (uncheckedEvent) {
        return uncheckedEvent.year === newEvent.year &&
            uncheckedEvent.month === newEvent.month &&
            uncheckedEvent.date === newEvent.date;
    });
    var sameStart = sameDate.find(function (event) { return event.startTime === newEvent.startTime; });
    var checkStart = sameDate.find(function (event) {
        return event.startTime >= newEvent.startTime &&
            event.startTime <= newEvent.endTime;
    });
    var checkEnd = sameDate.find(function (event) {
        return event.endTime > newEvent.startTime && event.endTime <= newEvent.endTime;
    });
    if (sameDate.length === 0) {
        return undefined;
    }
    else if (sameStart !== undefined) {
        return sameStart;
    }
    else if (checkStart !== undefined) {
        return checkStart;
    }
    else if (checkEnd !== undefined) {
        return checkEnd;
    }
    else {
        return undefined;
    }
};
//# sourceMappingURL=eventValidation.js.map