import { Request } from 'express';
import { User, IEvent, IServerResponse } from '../Utils';

export const postNewEvent = async (req: Request, res: IServerResponse) => {
  const { event, user } = req.body;
  const userMongo = await User.findOne({ facebookId: user.facebookId });
  const eventsSearch = userMongo.events.map(
    savedEvents => savedEvents.id === event.id
  );
  const eventExists = eventsSearch.length >= 1;

  if (eventExists) {
    return res.json({
      status: 500,
      data: `There are ${
        eventsSearch.length
      } event(s) already in here with that I.D`,
      events: <IEvent[] | IEvent>userMongo.events
    });
  } else {
    await event.save();
    await userMongo.events.push(event);
    return res.json({
      status: 200,
      data: `The event was succesfully created and added to ${
        userMongo.name
      }'s Events.`,
      events: <IEvent[] | IEvent>userMongo.events
    });
  }
};
