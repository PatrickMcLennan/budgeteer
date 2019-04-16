import uuid from 'uuid';
import {
  IUser,
  User,
  IEvent,
  IServerResponse,
  IClientRequest,
  eventSort,
  eventValidation
} from '../Utils';

export const postNewEvent = async (
  req: IClientRequest,
  res: IServerResponse
) => {
  const { event, user } = req.body;
  const mongoUser: IUser = await User.findOne({ facebookId: user.facebookId });
  event.id = uuid.v4();

  const timeConflict: IEvent =
    mongoUser.events.length >= 1
      ? eventValidation(mongoUser.events, event)
      : undefined;

  if (timeConflict !== undefined) {
    return res.send({
      success: false,
      message: `${timeConflict.name} and ${event.name} have conflicting times`,
      events: user.events
    });
  } else {
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
