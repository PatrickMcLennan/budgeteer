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
      success: true,
      message: `${event.name} has been updated within ${user.name}'s account`,
      user: <IUser>mongoUser
    });
  } else {
    return res.json({
      success: false,
      message: `Multiple events were found with that I.D, when there should only be 1.`,
      user
    });
  }
};
