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
  const timeConflicts: IEvent[] = eventValidation(mongoUser.events);

  if (timeConflicts.length === 1) {
    mongoUser.events = sortedEvents;
    await user.save();
    return res.json({
      success: true,
      message: `${event.name} has been updated`,
      events: mongoUser.events
    });
  } else {
    return res.json({
      success: false,
      message: `Multiple events were found with that I.D, when there should only be 1.`,
      events: user.events
    });
  }
};
