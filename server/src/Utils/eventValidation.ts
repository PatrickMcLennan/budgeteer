import { IEvent } from './dictionary';

export const eventValidation: Function = (
  savedEvents: IEvent[],
  newEvent: IEvent
): IEvent => {
  const sameDate: IEvent[] = savedEvents
    .filter((event: IEvent): boolean => event.year === newEvent.year)
    .filter((event: IEvent): boolean => event.month === newEvent.month)
    .filter((event: IEvent): boolean => event.date === newEvent.date);

  console.log('samedate', sameDate);

  const sameStart: IEvent = sameDate.find(
    (event: IEvent): boolean => event.startTime === newEvent.startTime
  );

  console.log('samestart', sameStart);

  const checkStart: IEvent = sameDate.find(
    (event: IEvent): boolean =>
      event.startTime >= newEvent.startTime &&
      event.startTime <= newEvent.endTime
  );

  console.log('checkstart', checkStart);

  const checkEnd: IEvent = sameDate.find(
    (event: IEvent): boolean =>
      event.endTime > newEvent.startTime && event.endTime <= newEvent.endTime
  );

  console.log('checkend', checkEnd);

  if (sameStart !== undefined) {
    return sameStart;
  } else if (checkStart !== undefined) {
    return checkStart;
  } else if (checkEnd !== undefined) {
    return checkEnd;
  } else {
    return undefined;
  }
};
