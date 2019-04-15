"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventSort = function (events) {
    var conflicts;
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
//# sourceMappingURL=eventSort.js.map