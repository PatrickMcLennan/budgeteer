"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oldEventFilter = function (events) {
    var now = new Date();
    var currentHour = Math.floor(now.getHours());
    var currentDate = Math.floor(now.getDate());
    var currentMonth = Math.floor(now.getMonth());
    var currentYear = Math.floor(now.getFullYear());
    return events.filter(function (event) {
        if (event.year < currentYear) {
            return false;
        }
        else if (event.year === currentYear && event.month < currentMonth) {
            return false;
        }
        else if (event.year === currentYear &&
            event.month === currentMonth &&
            event.date < currentDate) {
            return false;
        }
        else if (event.year === currentYear &&
            event.month === currentMonth &&
            event.date === currentDate &&
            event.endTime < currentHour) {
            return false;
        }
        else {
            return true;
        }
    });
};
exports.eventSort = function (events) {
    var validEvents = oldEventFilter(events);
    var conflicts;
    var yearSort = validEvents.sort(function (a, b) { return a.year - b.year; });
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