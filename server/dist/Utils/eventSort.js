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
        var currentEventYear = (currentEvent.year - currentYear) * 24;
        var nextEventYear = (nextEvent.year - currentYear) * 24;
        var currentEventMonth = (currentEvent.month - currentMonth) * 24;
        var nextEventMonth = (nextEvent.month - currentMonth) * 24;
        var currentEventDate = (currentEvent.date - currentDate) * 24;
        var nextEventDate = (nextEvent.date - currentDate) * 24;
        var currentEventStartTime = currentEvent.startTime;
        var nextEventStartTime = nextEvent.startTime;
        var current = currentEventYear +
            currentEventMonth +
            currentEventDate +
            currentEventStartTime;
        var next = nextEventYear + nextEventMonth + nextEventDate + nextEventStartTime;
        return current < next ? 0 : 1;
    });
    return dateSort;
};
//# sourceMappingURL=eventSort.js.map