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
  const { facebookId, event } = req.body;
  const user: IUser = await User.findOne({ facebookId });
  const eventExists: boolean = user.events.includes(event);

  if (eventExists) {
    user.events
      .filter((savedEvent: IEvent): boolean => savedEvent.id !== event.id)
      .push(event);
    user.events = eventSort(user.events);
    await user.save();
    return res.json({
      code: 200,
      message: `${event.name} has been updated within ${user.name}'s account`,
      user
    });
  } else {
    return res.json({
      code: 500,
      message: `Multiple events were found with that I.D, when there should only be 1.`,
      user
    });
  }
};
