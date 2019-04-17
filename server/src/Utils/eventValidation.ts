import { IEvent } from './dictionary';
import { Event } from './schemas';

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

  const sameStart: IEvent = sameDate.find(
    (event: IEvent): boolean => event.startTime === newEvent.startTime
  );

  console.log('samedate', sameDate);
  console.log('newevent', newEvent);
  return sameDate.length === 0 ? undefined : sameStart;
};
