import { IEvent } from './dictionary';

export const eventValidation: Function = (
  savedEvents: IEvent[],
  newEvent: IEvent
): IEvent => {
  const sameYear: IEvent[] = savedEvents.filter(
    (event: IEvent): boolean => event.year === newEvent.year
  );
  const sameMonth: IEvent[] = sameYear.filter(
    (event: IEvent): boolean => event.month === newEvent.month
  );
  const sameDates: IEvent[] = sameMonth.filter(
    (event: IEvent): boolean => event.date === newEvent.date
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

// export const eventValidation: Function = (
//   savedEvents: IEvent[],
//   newEvent: IEvent
// ): IEvent => {
//   const sameDate: IEvent[] = savedEvents.filter(
//     (uncheckedEvent: IEvent): boolean =>
//       uncheckedEvent.year === newEvent.year &&
//       uncheckedEvent.month === newEvent.month &&
//       uncheckedEvent.date === newEvent.date
//   );

//   const sameStart: IEvent = sameDate.find(
//     (event: IEvent): boolean => event.startTime === newEvent.startTime
//   );

//   const checkStart: IEvent = sameDate.find(
//     (event: IEvent): boolean =>
//       event.startTime >= newEvent.startTime &&
//       event.startTime <= newEvent.endTime
//   );

//   const checkEnd: IEvent = sameDate.find(
//     (event: IEvent): boolean =>
//       event.endTime > newEvent.startTime && event.endTime <= newEvent.endTime
//   );

//   if (sameDate.length === 0) {
//     return undefined;
//   } else if (sameStart !== undefined) {
//     return sameStart;
//   } else if (checkStart !== undefined) {
//     return checkStart;
//   } else if (checkEnd !== undefined) {
//     return checkEnd;
//   } else {
//     return undefined;
//   }
// };
