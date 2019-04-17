"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = function (savedEvents, newEvent) {
    var sameDate = savedEvents.filter(function (event) {
        return event.year === newEvent.year &&
            event.month === newEvent.month &&
            event.date === newEvent.date;
    });
    var sameStart = sameDate.find(function (event) { return event.startTime === newEvent.startTime; });
    console.log('samedate', sameDate);
    console.log('newevent', newEvent);
    return sameDate.length === 0 ? undefined : sameStart;
};
//# sourceMappingURL=eventValidation.js.map