import { IEvent } from './dictionary';

export const eventValidation: Function = (
  savedEvents: IEvent[],
  newEvent: IEvent
): IEvent => {
  const sameDate: IEvent[] = savedEvents.filter(
    (event: IEvent): boolean =>
      event.year === newEvent.year &&
      event.month === newEvent.month &&
      event.date === newEvent.date
  );

  if (sameDate.length === 0) {
    return undefined;
  } else {
    for (let i = 0; i <= sameDate.length; i += 1) {
      const current: IEvent = sameDate[i];

      if (current.startTime === newEvent.startTime) {
        return current;
      } else if (
        current.endTime > newEvent.startTime &&
        current.endTime < newEvent.endTime
      ) {
        return current;
      } else if (
        current.startTime > newEvent.startTime &&
        current.startTime < newEvent.endTime
      ) {
        return current;
      } else if (
        newEvent.endTime > current.startTime &&
        newEvent.endTime < current.endTime
      ) {
        return current;
      } else if (
        newEvent.startTime > current.startTime &&
        newEvent.startTime < current.endTime
      ) {
        return current;
      } else {
        return undefined;
      }
    }
  }
};
