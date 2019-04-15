"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = function (events) {
    var duplicates = [];
    events.reduce(function (previousEvent, currentEvent) {
        if (previousEvent.date === currentEvent.date &&
            previousEvent.endTime > currentEvent.startTime) {
            duplicates.push(previousEvent, currentEvent);
        }
    });
    return duplicates;
};
//# sourceMappingURL=eventValidation.js.map