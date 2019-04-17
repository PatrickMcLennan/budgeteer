import { IEvent } from './dictionary';

// export const eventValidation: Function = (
//   savedEvents: IEvent[],
//   newEvent: IEvent
// ): IEvent => {
//   console.log(savedEvents);
//   console.log(newEvent);
//   let conflicts: IEvent = undefined;
//   for (let i = 0; i <= savedEvents.length; i += 1) {
//     const current = savedEvents[i];
//     if (current.year === newEvent.year) {
//       if (current.month === newEvent.month) {
//         if (current.date === newEvent.date) {
//           if (
//             (current.startTime < newEvent.endTime &&
//               current.endTime > newEvent.startTime) ||
//             (current.endTime > newEvent.startTime &&
//               current.startTime < newEvent.endTime)
//           ) {
//             conflicts = newEvent;
//           } else {
//             continue;
//           }
//         } else {
//           continue;
//         }
//       } else {
//         continue;
//       }
//     } else {
//       continue;
//     }
//     return conflicts;
//   }
// };

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
  const sameDate: IEvent[] = sameMonth.filter(
    (event: IEvent): boolean => event.date === newEvent.date
  );

  if (sameYear.length === 0) {
    return undefined;
  } else if (sameMonth.length === 0) {
    return undefined;
  } else if (sameDate.length === 0) {
    return undefined;
  } else {
    for (let i = 0; i <= sameDate.length; i += 1) {
      if (sameDate[i].startTime === newEvent.startTime) {
        return newEvent;
      } else {
        return undefined;
      }
    }
  }
};
