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
  let conflicts: IEvent[];

  const yearSort = validEvents.sort(
    (a: IEvent, b: IEvent): number => a.year - b.year
  );
  const monthSort = yearSort.sort(
    (a: IEvent, b: IEvent): number => {
      if (a.year === b.year) {
        return a.month - b.month;
      }
    }
  );
  const dateSort = monthSort.sort(
    (a: IEvent, b: IEvent): number => {
      if (a.month === b.month) {
        return a.date - b.date;
      }
    }
  );
  const daySort = dateSort.sort(
    (a: IEvent, b: IEvent): number => {
      if (a.date === b.date) {
        return a.day - b.day;
      }
    }
  );
  const startTimeSort = daySort.sort(
    (a: IEvent, b: IEvent): number => a.startTime - b.startTime
  );

  return startTimeSort;
};
