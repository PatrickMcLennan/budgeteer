import { Request, Response } from 'express';
import { Event, User } from '../Utils';

export const deleteEvent = async (req: Request, res: Response) => {
  const { user, event } = req.body;
  const userMongo = await User.findOne({ facebookId: user.facebookId });
  const eventsSearch = userMongo.events.map(
    savedEvents => savedEvents.id === event.id
  );
  const eventExists = eventsSearch.length >= 1 ? true : false;

  if (eventExists) {
    await user.events.remove(event);
    res.json({
      status: 200,
      data: 'Event Deleted Successfully',
      events: userMongo.events,
      hello: 3
    });
  } else {
    res.json({
      status: 404,
      data: 'No event was found with that I.D'
    });
  }
};
