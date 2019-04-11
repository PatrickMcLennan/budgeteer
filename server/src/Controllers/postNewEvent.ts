import {
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
  const user = await User.findOne({ facebookId });
  const eventExists = user.events.map(
    (savedEvents: IEvent): boolean => savedEvents.id === event.id
  );

  if (eventExists) {
    user.events.push(event);
    user.events = eventSort(user.events);
    return res.json({
      status: 500,
      data: `There are ${
        eventExists.length
      } event(s) already in here with that I.D`,
      events: <IEvent[] | IEvent>user.events
    });
  } else {
    user.events.push(event);
    await user.save();
    return res.json({
      status: 200,
      data: `The event was succesfully created and added to ${
        user.name
      }'s Events.`,
      events: <IEvent[] | IEvent>user.events
    });
  }
};
