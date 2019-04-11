import {
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
  const user = await User.findOne({ facebookId });
  const eventExists = user.events.map(
    (savedEvent: IEvent): boolean => savedEvent.id === event.id
  );

  if (eventExists) {
    user.events = user.events.filter(event => event.id !== eventsSearch[0].id);
    user.events = eventSort(user.events);
    res.json({
      status: 200,
      data: `${event.name} has been updated within ${user.name}'s account`,
      events: <IEvent[] | IEvent>user.events
    });
  } else {
    res.json({
      status: 404,
      data: `${
        eventsSearch.length
      } events were found with that I.D, when there should only be 1.`,
      events: <IEvent[] | IEvent>user.events
    });
  }
};
