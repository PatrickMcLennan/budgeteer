// INTERFACES
export interface IEvent {
  name: string;
  location: string;
  description: string;
  year: number;
  month: number;
  day: number;
  date: number;
  startTime: number;
  endTime: number;
  id?: string;
  cost: number;
  key?: any;
}

export interface IUser {
  name: string;
  facebookId: number;
  events: IEvent[] | [];
}

export interface IServerResponse extends Response {
  success: boolean;
  message: string;
  user: IUser;
}
