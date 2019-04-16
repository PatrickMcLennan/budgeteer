import { IEvent } from './dictionary';

export const eventValidation: Function = (
  savedEvents: IEvent[],
  newEvent: IEvent
): IEvent => {
  const sameDates: IEvent[] = savedEvents.filter(
    (event: IEvent) =>
      event.year === newEvent.year &&
      event.month === newEvent.month &&
      event.date === newEvent.date
  );
  console.log(sameDates);

  const timeConflicts: IEvent =
    sameDates.length >= 1
      ? sameDates.find(
          (event: IEvent): boolean => {
            if (event.startTime === newEvent.startTime) {
              return true;
            } else if (
              event.startTime < newEvent.startTime &&
              event.endTime > newEvent.startTime
            ) {
              return true;
            } else if (
              event.endTime > newEvent.startTime &&
              event.startTime < newEvent.startTime
            ) {
              return true;
            } else {
              return false;
            }
          }
        )
      : undefined;
  console.log(timeConflicts);
  return timeConflicts;
};
