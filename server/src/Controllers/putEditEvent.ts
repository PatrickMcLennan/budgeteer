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
  const eventId: string = event.id;

  mongoUser.events
    .filter((savedEvent: IEvent): boolean => savedEvent.id !== event.id)
    .push(event);
  const sortedEvents: IEvent[] = eventSort(mongoUser.events);
  const timeConflict: IEvent =
    sortedEvents.length > 1 ? eventValidation(sortedEvents, event) : undefined;

  if (timeConflict !== undefined) {
    mongoUser.events = sortedEvents;
    await user.save();
    return res.send({
      success: true,
      message: `${
        mongoUser.events.find((event: IEvent): boolean => event.id === eventId)
          .name
      } has been updated`,
      events: mongoUser.events
    });
  } else {
    return res.send({
      success: false,
      message: `${timeConflict.name} and ${
        mongoUser.events.find((event: IEvent): boolean => event.id === eventId)
          .name
      } have conflicting times.`,
      events: user.events
    });
  }
};
