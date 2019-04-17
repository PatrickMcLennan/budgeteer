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
      const currentEventYear: number = currentEvent.year - currentYear;
      const nextEventYear: number = nextEvent.year - currentYear;

      const currentEventMonth: number = currentEvent.month - currentMonth;
      const nextEventMonth: number = nextEvent.month - currentMonth;

      const currentEventDate: number = (currentEvent.date - currentDate) * 24;
      const nextEventDate: number = (nextEvent.date - currentDate) * 24;

      const currentEventStartTime: number = currentEvent.startTime;
      const nextEventStartTime: number = nextEvent.startTime;

      const current: number =
        currentEventYear +
        currentEventMonth +
        currentEventDate +
        currentEventStartTime;
      const next: number =
        nextEventYear + nextEventMonth + nextEventDate + nextEventStartTime;

      return current < next ? 0 : 1;
    }
  );
  return dateSort;
};
