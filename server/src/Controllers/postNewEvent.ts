import uuid from 'uuid';
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
  const user: IUser = await User.findOne({ user: facebookId });
  const eventExists: boolean = user.events.includes(event);

  if (eventExists) {
    return res.json({
      status: 500,
      data: `There is already an event with that I.D`,
      events: <IEvent[] | []>user.events
    });
  } else {
    event.id = uuid.v4();
    user.events.push(event);
    user.events = eventSort(user.events);
    await user.save();
    return res.json({
      status: 200,
      data: `${event.name} was succesfully created and added to ${
        user.name
      }'s Events.`,
      events: <IEvent[] | []>user.events
    });
  }
};
