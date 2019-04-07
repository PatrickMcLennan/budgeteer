// export interface IAction {
//   serverCall?: Function;
//   text: string;
//   whenClicked: Function;
// }

export interface IEvent {
  name: string;
  location: string;
  description: string;
  year: number;
  month: number;
  day: number;
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
