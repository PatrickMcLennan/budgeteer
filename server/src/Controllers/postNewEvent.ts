import { Request, Response } from 'express';
import { User } from '../Utils';
import * as expressVal from 'express-validator';
import { sanitizeBody } from 'express-validator/filter';

export const postNewEvent = async (req: Request, res: Response) => {
  const { event, user } = req.body;
  const userMongo = await User.findOne({ facebookId: user.facebookId });
  const eventsSearch = userMongo.events.map(
    savedEvents => savedEvents.id === event.id
  );
  const eventExists = eventsSearch.length >= 1 ? true : false;

  if (eventExists) {
    return res.json({
      status: 500,
      data: `There are ${
        eventsSearch.length
      } event(s) already in here with that I.D`,
      events: userMongo.events
    });
  } else {
    await event.save();
    await userMongo.events.push(event);
    return res.json({
      status: 200,
      data: `The event was succesfully created and added to ${
        userMongo.name
      }'s Events.`,
      events: userMongo.events
    });
  }
};
