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
  const sortedEvents: IEvent[] = eventSort(mongoUser.events);
  const searchForDupiclates: IEvent[] | [] = eventValidation(sortedEvents);

  if (searchForDupiclates.length >= 1) {
    return res.send({
      success: false,
      message: `${searchForDupiclates[0].name} and ${
        searchForDupiclates[1].name
      } have conflicting times`,
      events: user.events
    });
  } else {
    event.id = uuid.v4();
    mongoUser.events.push(event);
    mongoUser.events = sortedEvents;
    await mongoUser.save();
    return res.send({
      success: true,
      message: `${event.name} has been saved`,
      events: mongoUser.events
    });
  }
};
