import { Document } from 'mongoose';
import { Response } from 'express';

/**************** INTERFACES ****************/
export interface IServerResponse extends Response {
  data: string;
  events?: IEvent | IEvent[] | [];
  user?: IUser;
}

export interface IEvent extends Document {
  name: String;
  location: String;
  year: Number;
  month: Number;
  day: Number;
  startTime: Number;
  endTime: Number;
  id: string;
  cost: Number;
}

export interface IUser extends Document {
  name: String;
  facebookId: String;
  accessToken: String;
  events?: IEvent[];
}
