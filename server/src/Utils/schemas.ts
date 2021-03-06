import { model, Model, Schema } from 'mongoose';
import { IUser, IEvent } from './dictionary';

const EventSchema: Schema<IEvent> = new Schema(
  {
    name: {
      type: String,
      required: 'Please enter a name for the event.'
    },
    location: {
      type: String,
      required: 'Please provide a location'
    },
    description: String,
    year: {
      type: Number,
      required: 'Please provide a year.'
    },
    month: {
      type: Number,
      required: 'Please provide a month'
    },
    date: {
      type: Number,
      required: 'Please provide a date'
    },
    startTime: {
      type: Number,
      required: 'Please enter a start time for the event.'
    },
    endTime: {
      type: Number,
      required: 'Please enter an end time for the event.'
    },
    id: {
      type: String,
      required: 'No I.D has been entered.'
    },
    cost: {
      type: Number,
      required: 'Please enter the events cost'
    }
  },
  { collection: 'events' }
);

const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    facebookId: {
      type: Number,
      required: true
    },
    accessToken: {
      type: String,
      required: true
    },
    events: [EventSchema]
  },
  { collection: 'users' }
);

export const User: Model<IUser> = model<IUser>('User', UserSchema);
export const Event: Model<IEvent> = model<IEvent>('Event', EventSchema);
