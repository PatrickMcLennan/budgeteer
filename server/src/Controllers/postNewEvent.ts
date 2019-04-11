import {
  IUser,
  User,
  IEvent,
  IServerResponse,
  IClientRequest,
  eventSort
} from '../Utils';

export const postNewEvent = async (
  req: IClientRequest,
  res: IServerResponse
) => {
  const { event, facebookId } = req.body;
  const user: IUser = await User.findOne({ facebookId });
  const eventExists: boolean = user.events.includes(event);

  if (eventExists) {
    return res.json({
      status: 500,
      data: `There is already an event in here with that I.D`,
      events: <IEvent[] | []>user.events
    });
  } else {
    user.events.push(event);
    user.events = eventSort(user.events);
    return res.json({
      status: 200,
      data: `The event was succesfully created and added to ${
        user.name
      }'s Events.`,
      events: <IEvent[] | []>user.events
    });
  }
};
