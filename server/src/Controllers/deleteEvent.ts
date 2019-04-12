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
  const eventExists: boolean = user.events.includes(event);

  if (eventExists) {
    const validEvents: IEvent[] = mongoUser.events.filter(
      (validEvent: IEvent): boolean => validEvent.id !== event.id
    );
    mongoUser.events = eventSort(validEvents);
    await mongoUser.save();
    return res.json({
      code: 200,
      data: 'Event Deleted Successfully',
      user: mongoUser
    });
  } else {
    return res.json({
      code: 500,
      data: 'No Event was found with that I.D',
      user
    });
  }
};
