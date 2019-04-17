"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = function (savedEvents, newEvent) {
    var sameYear = savedEvents.filter(function (event) { return event.year === newEvent.year; });
    var sameMonth = sameYear.filter(function (event) { return event.month === newEvent.month; });
    var sameDate = sameMonth.filter(function (event) { return event.date === newEvent.date; });
    if (sameYear.length === 0) {
        return undefined;
    }
    else if (sameMonth.length === 0) {
        return undefined;
    }
    else if (sameDate.length === 0) {
        return undefined;
    }
    else {
        for (var i = 0; i <= sameDate.length; i += 1) {
            if (sameDate[i].startTime === newEvent.startTime) {
                return newEvent;
            }
            else {
                return undefined;
            }
        }
    }
};
//# sourceMappingURL=eventValidation.js.map