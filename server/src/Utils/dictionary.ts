import { Document } from 'mongoose';
import { Response } from 'express';

/**************** INTERFACES ****************/
export interface IClientRequest extends Response {
  body: {
    facebookId: IUser;
    event: IEvent;
  };
}

export interface IServerResponse extends Response {
  data: string;
  events?: IEvent[] | [];
  user?: IUser;
}

export interface IEvent extends Document {
  name: String;
  location: String;
  year: number;
  month: number;
  date: number;
  day: number;
  startTime: number;
  endTime: number;
  id: string;
  cost: number;
}

export interface IUser extends Document {
  name: String;
  facebookId: String;
  accessToken: String;
  events?: IEvent[];
}
