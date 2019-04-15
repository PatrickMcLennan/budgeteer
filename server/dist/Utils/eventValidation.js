"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = function (events) {
    var duplicates;
    events.reduce(function (prev, current) {
        if (current.startTime < prev.endTime) {
            duplicates.push(current, prev);
        }
        else {
            return prev;
        }
    });
    return duplicates;
};
//# sourceMappingURL=eventValidation.js.map