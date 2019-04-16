"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = function (savedEvents, newEvent) {
    var sameDate = savedEvents
        .filter(function (event) { return event.year === newEvent.year; })
        .filter(function (event) { return event.month === newEvent.month; })
        .filter(function (event) { return event.date === newEvent.date; });
    console.log('samedate', sameDate);
    var sameStart = sameDate.find(function (event) { return event.startTime === newEvent.startTime; });
    console.log('samestart', sameStart);
    var checkStart = sameDate.find(function (event) {
        return event.startTime >= newEvent.startTime &&
            event.startTime <= newEvent.endTime;
    });
    console.log('checkstart', checkStart);
    var checkEnd = sameDate.find(function (event) {
        return event.endTime > newEvent.startTime && event.endTime <= newEvent.endTime;
    });
    console.log('checkend', checkEnd);
    if (sameStart !== undefined) {
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