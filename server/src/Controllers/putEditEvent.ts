import { Request, Response } from 'express';
import { default as fetch } from 'node-fetch';
import { User, IUser } from '../Utils';

export const putEditEvent = async (req: Request, res: Response) => {
  const { user, event } = req.body;
  const userMongo = await User.findOne({ facebookId: user.facebookId });
  const eventsSearch = userMongo.events.map(
    savedEvent => savedEvent.id === event.id
  );
  const eventExists = eventsSearch.length === 1 ? true : false;

  if (eventExists) {
    await user.events.remove(eventsSearch[0]);
    await user.events.save(event);
    res.json({
      status: 500,
      data: `${event.name} has been updated within ${user.name}'s account`,
      events: userMongo.events
    });
  } else {
    res.json({
      status: 404,
      data: `${
        eventsSearch.length
      } events were found with that I.D, when there should only be 1.`
    });
  }
};
