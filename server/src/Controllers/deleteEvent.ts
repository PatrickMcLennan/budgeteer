import { Request } from 'express';
import { IEvent, IServerResponse, User } from '../Utils';

export const deleteEvent = async (req: Request, res: IServerResponse) => {
  const { user, event } = req.body;
  const userMongo = await User.findOne({ facebookId: user.facebookId });
  const eventsSearch = userMongo.events.map(
    savedEvents => savedEvents.id === event.id
  );
  const eventExists = eventsSearch.length >= 1;

  if (eventExists) {
    await user.events.remove(event);
    res.json({
      status: 200,
      data: 'Event Deleted Successfully',
      events: <IEvent[] | []>userMongo.events
    });
  } else {
    res.json({
      status: 404,
      data: 'No Event was found with that I.D',
      events: <IEvent[] | []>userMongo.events
    });
  }
};
