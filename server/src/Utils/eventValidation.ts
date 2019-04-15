import { IEvent } from './dictionary';

export const eventValidation: Function = (
  savedEvents: IEvent[],
  newEvent: IEvent
): IEvent[] => {
  const sameMonth = savedEvents.filter(
    (event: IEvent): boolean => event.month === newEvent.month
  );
  const sameDate = sameMonth.filter(
    (event: IEvent): boolean => event.date === newEvent.date
  );
  const earlierEvents = sameDate.filter(
    (event: IEvent): boolean => event.startTime < newEvent.startTime
  );
  const timeConflicts = earlierEvents.filter(
    (event: IEvent): boolean => event.endTime > newEvent.startTime
  );

  const sameStart = sameDate.filter(
    (event: IEvent): boolean => event.startTime === newEvent.startTime
  );

  if (sameStart.length > 1) {
    return sameStart;
  } else {
    return timeConflicts;
  }
};
