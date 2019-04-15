"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventSort = function (events) {
    var yearSort = events.sort(function (a, b) { return a.year - b.year; });
    var monthSort = yearSort.sort(function (a, b) {
        if (a.year === b.year) {
            return a.month - b.month;
        }
    });
    var dateSort = monthSort.sort(function (a, b) {
        if (a.month === b.month) {
            return a.date - b.date;
        }
    });
    var daySort = dateSort.sort(function (a, b) {
        if (a.date === b.date) {
            return a.day - b.day;
        }
    });
    var startTimeSort = daySort.sort(function (a, b) { return a.startTime - b.startTime; });
    return startTimeSort;
};
exports.eventSort2 = function (events) {
    var keys = events.map(function (event) {
        var Event = new Map();
        Event.set('year', event.year);
        Event.set('month', event.year);
        Event.set('date', event.year);
        Event.set('startTime', event.year);
        Event.set('endTime', event.year);
    });
};
//# sourceMappingURL=eventSort.js.map