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
    var dateSort = validEvents.sort(function (currentEvent, nextEvent) {
        var currentEventTotals = currentEvent.year + currentEvent.month + currentEvent.date;
        var nextEventTotals = nextEvent.year + nextEvent.month + nextEvent.date;
        var currentTimeTotals = currentYear + currentMonth + currentDate;
        var current = currentEventTotals - currentTimeTotals;
        var next = nextEventTotals - currentTimeTotals;
        return current - next;
    });
    var timeSort = dateSort.sort(function (currentEvent, nextEvent) {
        return currentEvent.date === nextEvent.date
            ? currentEvent.startTime - nextEvent.startTime
            : 0;
    });
    return timeSort;
};
//# sourceMappingURL=eventSort.js.map