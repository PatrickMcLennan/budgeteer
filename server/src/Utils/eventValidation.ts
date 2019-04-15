import { IEvent } from './dictionary';

export const eventValidation: Function = (events: IEvent[]): IEvent | [] => {
  let duplicates: IEvent[] | IEvent | [];
  events.reduce((prev: IEvent, current: IEvent) => {
    if (current.startTime < prev.endTime) {
      duplicates.push(current, prev);
    } else {
      return prev;
    }
  });
  return duplicates;
};
