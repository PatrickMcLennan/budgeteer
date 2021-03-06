import {
  IUser,
  User,
  IEvent,
  IServerResponse,
  IClientRequest,
  eventSort,
  eventValidation
} from '../Utils';

export const putEditEvent = async (
  req: IClientRequest,
  res: IServerResponse
) => {
  const { user, event } = req.body;
  const mongoUser: IUser = await User.findOne({ facebookId: user.facebookId });

  event.year = Math.floor(event.year);
  event.month = Math.floor(event.month);
  event.date = Math.floor(event.date);
  event.startTime = Math.floor(event.startTime);
  event.endTime = Math.floor(event.endTime);

  const otherEvents: IEvent[] = mongoUser.events.filter(
    (savedEvent: IEvent): boolean => savedEvent.id !== event.id
  );
  otherEvents.push(event);

  const timeConflict: IEvent =
    otherEvents.length > 1 ? eventValidation(otherEvents, event) : undefined;

  if (event.endTime < event.startTime) {
    return res.send({
      success: false,
      message: `${event.name} can't end at ${event.endTime} if it starts at ${
        event.startTime
      }`,
      events: user.events
    });
  } else if (timeConflict !== undefined) {
    const sortedEvents: IEvent[] = eventSort(otherEvents);
    mongoUser.events = sortedEvents;
    await mongoUser.save();
    return res.send({
      success: true,
      message: `${event.name} has been updated`,
      events: mongoUser.events
    });
  } else {
    return res.send({
      success: false,
      message: `${timeConflict.name} and ${event.name} have conflicting times.`,
      events: user.events
    });
  }
};
