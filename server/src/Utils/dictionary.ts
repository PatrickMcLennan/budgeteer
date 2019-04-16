import { Document } from 'mongoose';
import { Request, Response } from 'express';

/**************** INTERFACES ****************/
export interface IClientRequest extends Request {
  body: {
    user: IUser;
    event: IEvent;
  };
}

export interface IServerResponse extends Response {
  success: boolean;
  message: string;
  events: IEvent[] | [];
}

export interface IEvent extends Document {
  name: string;
  location: string;
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
