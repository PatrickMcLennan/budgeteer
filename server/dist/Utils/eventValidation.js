"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = function (savedEvents, newEvent) {
    var sameDate = savedEvents.filter(function (event) {
        return event.year === newEvent.year &&
            event.month === newEvent.month &&
            event.date === newEvent.date;
    });
    if (sameDate.length === 0) {
        return undefined;
    }
    else {
        for (var i = 0; i <= sameDate.length; i += 1) {
            var current = sameDate[i];
            if (current.startTime === newEvent.startTime) {
                return current;
            }
            else if (current.endTime > newEvent.startTime &&
                current.endTime < newEvent.endTime) {
                return current;
            }
            else if (current.startTime > newEvent.startTime &&
                current.startTime < newEvent.endTime) {
                return current;
            }
            else if (newEvent.endTime > current.startTime &&
                newEvent.endTime < current.endTime) {
                return current;
            }
            else if (newEvent.startTime > current.startTime &&
                newEvent.startTime < current.endTime) {
                return current;
            }
            else {
                return undefined;
            }
        }
    }
};
//# sourceMappingURL=eventValidation.js.map