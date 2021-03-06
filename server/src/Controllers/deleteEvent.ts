import {
  IUser,
  IEvent,
  IServerResponse,
  IClientRequest,
  User,
  eventSort
} from '../Utils';

export const deleteEvent = async (
  req: IClientRequest,
  res: IServerResponse
) => {
  const { user, event } = req.body;
  const mongoUser: IUser = await User.findOne({ facebookId: user.facebookId });

  const validEvents: IEvent[] = mongoUser.events.filter(
    (validEvent: IEvent): boolean => validEvent.id !== event.id
  );
  mongoUser.events = eventSort(validEvents);
  await mongoUser.save();
  return res.json({
    success: true,
    message: `${event.name} has been deleted`,
    events: mongoUser.events
  });
};
