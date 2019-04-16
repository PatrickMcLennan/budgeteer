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
    var now = new Date();
    var currentYear = Math.floor(now.getFullYear());
    var currentMonth = Math.floor(now.getFullYear());
    var currentDate = Math.floor(now.getDate());
    var yearSort = validEvents.sort(function (event) {
        return event.year === currentYear ? 0 : event.year - currentYear;
    });
    var monthSort = yearSort.sort(function (currEvent, nextEvent) {
        if (currEvent.year === nextEvent.year) {
            return currEvent.month === currentMonth
                ? 0
                : currEvent.month - currentMonth;
        }
    });
    var dateSort = monthSort.sort(function (currEvent, nextEvent) {
        if (currEvent.month === nextEvent.month) {
            return currEvent.date === currentDate
                ? 0
                : currEvent.date - currentDate;
        }
    });
    var timeSort = dateSort.sort(function (currEvent, nextEvent) {
        if (currEvent.date === nextEvent.date) {
            return currEvent.startTime < nextEvent.startTime ? 0 : 1;
        }
    });
    return timeSort;
};
//# sourceMappingURL=eventSort.js.map