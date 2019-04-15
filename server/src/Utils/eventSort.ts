import { IEvent } from './dictionary';

export const eventSort = (events: IEvent[]): IEvent[] => {
  const yearSort = events.sort(
    (a: IEvent, b: IEvent): IEvent['year'] => a.year - b.year
  );
  const monthSort = yearSort.sort(
    (a: IEvent, b: IEvent): IEvent['month'] => {
      if (a.year === b.year) {
        return a.month - b.month;
      }
    }
  );
  const dateSort = monthSort.sort(
    (a: IEvent, b: IEvent): IEvent['date'] => {
      if (a.month === b.month) {
        return a.date - b.date;
      }
    }
  );
  const daySort = dateSort.sort(
    (a: IEvent, b: IEvent): IEvent['day'] => {
      if (a.date === b.date) {
        return a.day - b.day;
      }
    }
  );
  const startTimeSort = daySort.sort(
    (a: IEvent, b: IEvent): IEvent['startTime'] => a.startTime - b.startTime
  );
  return startTimeSort;
};

// export const eventSort2: Function = (events: IEvent[]): IEvent[] | any => {
//   const numberProperties = events.map((event: IEvent) => {
//     const Event = new Map<string, number>();
//     Object.keys(event).forEach((key: string | number) => Event.set(key, event[key]));

//     Event.set('year', event.year);
//     Event.set('month', event.year);
//     Event.set('date', event.year);
//     Event.set('startTime', event.year);
//     Event.set('endTime', event.year);
//   });
// };
