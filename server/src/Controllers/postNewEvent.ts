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
      data: `That's weird - there's already an event with that I.D.  Please refresh and try again.`,
      events: <IEvent[] | []>user.events
    });
  } else {
    event.id = uuid.v4();
    user.events.push(event);
    user.events = eventSort(user.events);
    await user.save();
    return res.json({
      status: 200,
      data: `${event.name} has been saved`,
      events: <IEvent[] | []>user.events
    });
  }
};
