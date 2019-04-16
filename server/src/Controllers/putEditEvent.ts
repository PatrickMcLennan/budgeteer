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

  const otherEvents: IEvent[] = mongoUser.events.filter(
    (savedEvent: IEvent): boolean => savedEvent.id !== event.id
  );
  otherEvents.push(event);

  const timeConflict: IEvent =
    mongoUser.events.length > 1
      ? eventValidation(mongoUser.events, event)
      : undefined;

  if (timeConflict !== undefined) {
    const sortedEvents: IEvent[] = eventSort(otherEvents);
    mongoUser.events = sortedEvents;
    await mongoUser.save();
    return res.send({
      success: true,
      message: `${
        mongoUser.events.find(
          (editedEvent: IEvent): boolean => editedEvent.id === event.id
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
