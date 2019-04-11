import {
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
  const { facebookId, event } = req.body;
  const user = await User.findOne({ facebookId });
  const eventExists = user.events.includes(event);

  if (eventExists) {
    // fix the array you idiot
    user.events = eventSort(user.events);
    return res.json({
      status: 200,
      data: 'Event Deleted Successfully',
      events: <IEvent[] | []>user.events
    });
  } else {
    return res.json({
      status: 404,
      data: 'No Event was found with that I.D',
      events: <IEvent[] | []>user.events
    });
  }
};
