import { IEvent } from './dictionary';

export const eventValidation: Function = (events: IEvent[]): IEvent[] => {
  const duplicates: IEvent[] = [];
  events.reduce(
    (previousEvent: IEvent, currentEvent: IEvent): any => {
      if (
        previousEvent.date === currentEvent.date &&
        previousEvent.endTime > currentEvent.startTime
      ) {
        duplicates.push(previousEvent, currentEvent);
      }
    }
  );
  return duplicates;
};
