import {
  IUser,
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
  const user: IUser = await User.findOne({ facebookId });
  const eventExists: boolean = user.events.includes(event);

  if (eventExists) {
    const validEvents: IEvent[] | [] = user.events.filter(
      (validEvent: IEvent): boolean => validEvent.id !== event.id
    );
    user.events = eventSort(validEvents);
    return res.json({
      status: 200,
      data: 'Event Deleted Successfully',
      events: <IEvent[] | []>user.events
    });
  } else {
    return res.json({
      status: 500,
      data: 'No Event was found with that I.D',
      events: <IEvent[] | []>user.events
    });
  }
};
