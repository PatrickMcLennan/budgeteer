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
  const { event, user } = req.body;
  const mongoUser: IUser = await User.findOne({ facebookId: user.facebookId });
  const eventExists: boolean = user.events.includes(event);

  if (eventExists) {
    return res.send({
      success: false,
      message: `That's weird - there's already an event with that I.D.  Please refresh and try again.`,
      events: user.events
    });
  } else {
    event.id = uuid.v4();
    mongoUser.events.push(event);
    mongoUser.events = eventSort(mongoUser.events);
    await mongoUser.save();
    return res.send({
      success: true,
      message: `${event.name} has been saved`,
      events: mongoUser.events
    });
  }
};
