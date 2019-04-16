import { IEvent } from './dictionary';

const oldEventFilter: Function = (events: IEvent[]): IEvent[] => {
  const now = new Date();
  const currentHour = Math.floor(now.getHours());
  const currentDate = Math.floor(now.getDate());
  const currentMonth = Math.floor(now.getMonth());
  const currentYear = Math.floor(now.getFullYear());

  return events.filter(
    (event: IEvent): boolean => {
      if (event.year < currentYear) {
        return false;
      } else if (event.year === currentYear && event.month < currentMonth) {
        return false;
      } else if (
        event.year === currentYear &&
        event.month === currentMonth &&
        event.date < currentDate
      ) {
        return false;
      } else if (
        event.year === currentYear &&
        event.month === currentMonth &&
        event.date === currentDate &&
        event.endTime < currentHour
      ) {
        return false;
      } else {
        return true;
      }
    }
  );
};

export const eventSort = (events: IEvent[]): IEvent[] => {
  const validEvents = oldEventFilter(events);
  const now = new Date();
  const currentYear = Math.floor(now.getFullYear());
  const currentMonth = Math.floor(now.getFullYear());
  const currentDate = Math.floor(now.getDate());

  const dateSort: IEvent[] = validEvents.sort(
    (currentEvent: IEvent, nextEvent: IEvent): number => {
      const currentEventTotals: number =
        currentEvent.year + currentEvent.month + currentEvent.date;
      const nextEventTotals: number =
        nextEvent.year + nextEvent.month + nextEvent.date;
      const currentTimeTotals: number =
        currentYear + currentMonth + currentDate;

      const current: number = currentEventTotals - currentTimeTotals;
      const next: number = nextEventTotals - currentTimeTotals;

      return current - next;
    }
  );

  const timeSort: IEvent[] = dateSort.sort(
    (currentEvent: IEvent, nextEvent: IEvent): number =>
      currentEvent.date === nextEvent.date
        ? currentEvent.startTime - nextEvent.startTime
        : 0
  );
  return timeSort;
};
