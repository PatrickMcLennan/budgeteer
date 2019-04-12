import {
  IUser,
  User,
  IEvent,
  IServerResponse,
  IClientRequest,
  eventSort
} from '../Utils';

export const putEditEvent = async (
  req: IClientRequest,
  res: IServerResponse
) => {
  const { user, event } = req.body;
  const mongoUser: IUser = await User.findOne({ facebookId: user.facebookId });
  const eventExists: boolean = user.events.includes(event);

  if (eventExists) {
    mongoUser.events
      .filter((savedEvent: IEvent): boolean => savedEvent.id !== event.id)
      .push(event);
    mongoUser.events = eventSort(mongoUser.events);
    await user.save();
    return res.json({
      code: 200,
      message: `${event.name} has been updated within ${user.name}'s account`,
      user: mongoUser
    });
  } else {
    return res.json({
      code: 500,
      message: `Multiple events were found with that I.D, when there should only be 1.`,
      user
    });
  }
};
