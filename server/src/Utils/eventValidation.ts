import { IEvent } from './dictionary';

export const eventValidation: Function = (
  savedEvents: IEvent[],
  newEvent: IEvent
): IEvent[] => {
  const sameDate = savedEvents.filter(
    (event: IEvent): boolean => event.date === newEvent.date
  );
  const sameStart = sameDate.filter(
    (event: IEvent): boolean => event.startTime === newEvent.startTime
  );
  const earlierEvents = sameDate.filter(
    (event: IEvent): boolean => event.startTime < newEvent.startTime
  );
  const timeConflicts = earlierEvents.filter(
    (event: IEvent): boolean => event.endTime > newEvent.startTime
  );

  if (sameDate.length === 0) {
    return sameDate;
  } else if (sameStart.length !== 0) {
    return sameStart;
  } else {
    return timeConflicts;
  }
};
