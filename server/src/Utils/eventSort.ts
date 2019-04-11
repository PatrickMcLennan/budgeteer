import { IEvent } from './dictionary';

export const eventSort = (events: IEvent[]): IEvent[] => {
  const yearSort = events.sort(
    (a: IEvent, b: IEvent): number => a.year - b.year
  );
  const monthSort = yearSort.sort(
    (a: IEvent, b: IEvent): number => a.month - b.month
  );
  const dateSort = monthSort.sort(
    (a: IEvent, b: IEvent): number => a.date - b.date
  );
  const daySort = dateSort.sort(
    (a: IEvent, b: IEvent): number => a.day - b.day
  );
  const startTimeSort = daySort.sort(
    (a: IEvent, b: IEvent): number => a.startTime - b.startTime
  );
  return startTimeSort;
};
