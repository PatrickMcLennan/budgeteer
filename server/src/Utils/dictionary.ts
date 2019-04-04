import { Document } from 'mongoose';

/**************** INTERFACES ****************/
export interface IWeather {
  temperature: Number;
  current: Number;
  tomorrow: Number;
  location: String;
  icon: URL;
}

export interface IEvent extends Document {
  name: String;
  location: String;
  year: Number;
  month: Number;
  day: Number;
  startTime: Number;
  endTime: Number;
  id: String;
  cost: Number;
}

export interface ICalendar {
  date: Number;
  weekDay: String;
  month: String;
  city: String;
  province: String;
  icon?: URL;
  events?: IEvent[];
}

export interface IUser extends Document {
  facebookID: String;
  accessToken: String;
  events?: IEvent[];
  json?: Function;
}
