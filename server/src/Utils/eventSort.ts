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
  const validEvents: IEvent[] = oldEventFilter(events);
  const now = new Date();
  const currentYear = Math.floor(now.getFullYear());
  const currentMonth = Math.floor(now.getFullYear());
  const currentDate = Math.floor(now.getDate());

  const yearSort: IEvent[] = validEvents.sort(
    (event: IEvent): number =>
      event.year === currentYear ? 0 : event.year - currentYear
  );

  const monthSort: IEvent[] = yearSort.sort(
    (currEvent: IEvent, nextEvent: IEvent): number => {
      if (currEvent.year === nextEvent.year) {
        return currEvent.month === currentMonth
          ? 0
          : currEvent.month - currentMonth;
      }
    }
  );

  const dateSort: IEvent[] = monthSort.sort(
    (currEvent: IEvent, nextEvent: IEvent): number => {
      if (currEvent.month === nextEvent.month) {
        return currEvent.date === currentDate
          ? 0
          : currEvent.date - currentDate;
      }
    }
  );

  const timeSort: IEvent[] = dateSort.sort(
    (currEvent: IEvent, nextEvent: IEvent): number => {
      if (currEvent.date === nextEvent.date) {
        return currEvent.startTime < nextEvent.startTime ? 0 : 1;
      }
    }
  );
  return timeSort;
};
