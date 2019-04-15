import { IEvent } from './dictionary';

export const eventValidation: Function = (events: IEvent[]): IEvent[] => {
  const duplicates: IEvent[] = [];
  events.reduce(
    (previousEvent: IEvent, currentEvent: IEvent): any => {
      if (
        previousEvent.endTime > currentEvent.startTime &&
        previousEvent.date === currentEvent.date
      ) {
        duplicates.push(previousEvent, currentEvent);
      }
    }
  );
  return duplicates;
};
