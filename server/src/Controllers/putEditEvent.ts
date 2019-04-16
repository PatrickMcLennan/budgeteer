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

  mongoUser.events
    .filter((savedEvent: IEvent): boolean => savedEvent.id !== event.id)
    .push(event);

  const sortedEvents: IEvent[] = eventSort(mongoUser.events);
  const timeConflict: IEvent =
    sortedEvents.length > 1 ? eventValidation(sortedEvents, event) : undefined;

  if (timeConflict !== undefined) {
    mongoUser.events = sortedEvents;
    await mongoUser.save();
    return res.send({
      success: true,
      message: `${
        mongoUser.events.find(
          (savedEvent: IEvent): boolean => savedEvent.id === event.id
        ).name
      } has been updated`,
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
